/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { callToast } from '../../Components/Toast';
import * as ImagePicker from 'react-native-image-picker';

//import data
import label from './label';
import { userData } from '../../api/userData';

//import components
import { uriHeader } from '../UserScreen/template/subView/Avatar';
//import template
import ChangeInformationMainView from './template/ChangeInformationMainView';

const ChangeInformationContainer = (props) => {
    const {
        navigation,
    } = props;

    const [loading, setLoading] = useState(true);

    //form of user information
    const [form, setForm] = useState({});
    const [user, setUser] = useState({});

    //save user information to async storage
    const saveUser = async (change) => {
        //if there is change, merge data and save it to storage
        if (change) {
            const mergeData = {
                ...user, ...change,
            };
            await AsyncStorage.setItem('user', JSON.stringify(mergeData));
        }
    };

    //get avatar
    const getAvatar = async () => {
        const options = {
            mediaType: 'photo',
            maxWidth: 250,
            maxHeight: 250,
            includeBase64: true,
            quality: 1,
        };

        await ImagePicker.launchImageLibrary(options, async (result) => {
            if (result) {
                const avatarUri = {'avatar': uriHeader + result.assets[0].base64};
                setUser({...user, ['avatar']: avatarUri.avatar});
                await saveUser(avatarUri);
                callToast('Your avatar is successfully updated!');
            }
        });

    };

    //set phone number picker
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('+84');

    //set date and picker
    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    //show date picker
    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    };

    //format date to DD/MM/Y
    const formatDate = (rawDate) => {
        let formatedDate = new Date(rawDate);

        let year = formatedDate.getFullYear();

        let month = formatedDate.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;

        let day = formatedDate.getDate();
        day = day < 10 ? `0${day}` : day;

        return `${day}/${month}/${year}`;
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || new Date();
        setDate(currentDate);

        //format date
        const formatedDate = formatDate(currentDate);
        setDateString(formatedDate);

        setForm({...form, ['birthday']: formatedDate});
        //set error.birthday to null when the form.birthday has selected value
        setError((previous) => {
            return {...previous, birthday: null};
            });

        toggleDatePicker();
    };

    //set error
    const [error, setError] = useState({});
    let errorGlobal = 'This field is required';

    //set genders
    const genders = [label.male, label.female, label.other];
    const [gender, setGender] = useState('');

    //select gender
    const onSelectedGender = (selectedGender) => {
        const choiceGender = selectedGender;

        setGender(choiceGender);
        setForm({...form, ['gender']: formatDate(choiceGender)});

        setError((previous) => {
            return {...previous, gender: null};
        });
    };

    const onChange = ({key, value}) => {
        setForm({...form, [key]: value});
        let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        //check value of input
        //if the value is not empty, set all error values to null
        if (value !== '') {
            //check email
            //if email is invalid, set error email value, if not, set it to null
            if (key === 'email') {
                if (!emailReg.test(value)) {
                    setError((previous) => {
                        return {...previous, [key]: 'Invalid email! Please try again.'};
                    });
                } else {
                    setError((previous) => {
                        return {...previous, [key]: null};
                    });
                }
            //add country code on the phone value
            } else {
                setError((previous) => {
                    return {...previous, [key]: null};
                });
            }
        }
    };

    //function onSubmit will check values first
    //if a value is empty, set error of this type of values.
    const onSubmit = async () => {
        if (dateString) {
            setError((previous) => {
                return {...previous, birthday: null};
            });

        } else {
            setError((previous) => {
                return {...previous, birthday: errorGlobal};
            });
        }

        if (gender) {
            setForm({...form, ['gender']: gender});

            setError((previous) => {
                return {...previous, gender: null};
            });

        } else {
            setError((previous) => {
                return {...previous, gender: errorGlobal};
            });
        }

        if (!form.name) {
            setError((previous) => {
                return {...previous, name: errorGlobal};
            });
        }

        if (!form.phone) {
            setError((previous) => {
                return {...previous, phone: errorGlobal};
            });
        }

        if (!form.email) {
            setError((previous) => {
                return {...previous, email: errorGlobal};
            });
        }

        if (!form.address) {
            setError((previous) => {
                return {...previous, address: errorGlobal};
            });
        }
        //if the form has enough 6 values, all of the values is not empty and
        //all of error's values is null, save the form into Async Storage
        if (Object.values(form).length === 6 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(error).every((item) => !item)
        ) {
            //merge form with user data, then save it to storage
            const mergeData = {
                ...user, ...form,
            };

            callToast('Your information is successfully updated!');
            await AsyncStorage.setItem('user', JSON.stringify(mergeData));
            navigation.navigate('usermenu');
        }
    };

    const getUserData = async () => {
        setUser(await userData());
        setLoading(false);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUserData();
        });

        return unsubscribe;
    }, [navigation, user]);

    const changeInformationProps = {
        navigation,
        //values
        loading,
        user,
        error,
        countryCode,
        show,
        date,
        showDatePicker,
        dateString,
        genders,
        //functions
        getAvatar,
        onChange,
        setShow,
        setCountryCode,
        onChangeDate,
        toggleDatePicker,
        setDateString,
        onSelectedGender,
        onSubmit,
    };

  return <ChangeInformationMainView {...changeInformationProps} />;
};

export default ChangeInformationContainer;
