/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-useless-escape */
import { View, Text, StatusBar, TouchableOpacity, ScrollView,
    KeyboardAvoidingView } from 'react-native';
import React, { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { callToast } from '../../Components/Toast';
import { CountryPicker } from 'react-native-country-codes-picker';
import * as ImagePicker from 'react-native-image-picker';

//import styles
import defaultStyles from '../../DefaultStyles';
import styles from './styles';
import { color } from '../../DefaultStyles';

//import icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

//import data
import label from './label';
import { userData } from '../../api/userData';

//import components
import Avatar from '../UserScreen/template/subView/Avatar';
import { uriHeader } from '../UserScreen/template/subView/Avatar';
import Input from './Input';
import DropDownInput from './DropDownInput';
import LoadingScreen from '../../Components/LoadingScreen';

const ChangeInformationScreen = ({navigation}) => {
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

  return (
    <View style={[defaultStyles.container, {marginTop: StatusBar.currentHeight}]}>
        {loading ? (<LoadingScreen />) : (
            <View>
                <StatusBar translucent={true} backgroundColor="transparent" barstyles="dark-content" />
                <ScrollView keyboardShouldPersistTaps="always" >
                    <KeyboardAvoidingView>
                        {/*Header bar */}
                        <TouchableOpacity
                            onPress={() =>{
                                navigation.navigate('usermenu');
                            }}
                        >
                            <View style={styles.header}>
                                <Ionicons name="chevron-back-outline" size={24} color={color.black} />
                                <Text style={styles.headerText}>{label.editInformation}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.avatarView}>
                            <Avatar sourceImg={user.avatar} />
                        </View>
                        {/*Change ava button */}
                        <View style={styles.changeButtonContainer}>
                            <TouchableOpacity
                                onPress={ () => {
                                    getAvatar();
                                }}>
                                <Entypo name="edit" style={styles.changeIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputView}>
                            {/*
                                ------------------------------INPUT FORM------------------------------
                                The idea is create an TextInput custom, and re-use it on every inputs
                                in the screen.
                                The function onChange will push the values to state form with key name
                                after checking the conditions.
                                Phone input, birthday input and gender input will have their on custom
                                input (with downloaded npm packages)
                            */}
                            {/*Name input */}
                            <Input
                                onChangeText={(value) => {
                                    onChange({key: 'name', value});
                                }}
                                placeholder={user.name}
                                labelName={label.name}
                                error={error.name ? error.name : ''}
                            />
                            {/*Phone number input */}
                            <View>
                                <Input
                                    onChangeText={(value) => {
                                        const fullPhone = value ? (countryCode + value) : '';
                                        onChange({key: 'phone', fullPhone});
                                    }}
                                    placeholder={user.phone}
                                    labelName={label.phoneNumber}
                                    keyboardType="numeric"
                                    error={error.phone ? error.phone : ''}
                                    style={{marginLeft: 46}}
                                />
                                <View style={styles.codePhoneContainer}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => setShow(true)}
                                    >
                                        <View style={styles.textIconContainer}>
                                            <Text style={styles.codePhoneText}>{countryCode}</Text>
                                            <Entypo name="chevron-small-down" size={14} color={color.bgMedium} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <CountryPicker
                                    show={show}
                                    pickerButtonOnPress={(countryCodeItem) => {
                                        setCountryCode(countryCodeItem.dial_code);
                                        setShow(false);
                                    }}
                                    onBackdropPress={() => {
                                        setShow(false);
                                    }}
                                    showOnly={['vn']}
                                    style={styles.countryPickerModal}
                                />
                            </View>
                            {/*Email input */}
                            <Input
                                onChangeText={(value) => {
                                    onChange({key: 'email', value});
                                }}
                                placeholder={user.email}
                                autoCapitalize="none"
                                labelName={label.email}
                                keyboardType="email-address"
                                error={error.email ? error.email : ''}
                            />
                            {/*Birthday input*/}
                            { showDatePicker ? (
                                <DateTimePicker
                                    mode="date"
                                    display="calendar"
                                    value={date}
                                    onChange={onChangeDate}
                                />
                            ) : null}
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => toggleDatePicker()}
                            >
                                <Input
                                    onChangeText={setDateString}
                                    value={dateString}
                                    placeholder={user.birthday}
                                    labelName={label.birthday}
                                    editable={false}
                                    error={error.birthday ? error.birthday : ''}
                                />
                            </TouchableOpacity>
                            {/*Gender input */}
                            <DropDownInput
                                labelName={label.gender}
                                placeholder={' '}
                                data={genders}
                                onSelectedText={(selectedGender, genderIndex) => {
                                    onSelectedGender(selectedGender);
                                }}
                                error={error.gender ? error.gender : ''}
                            />
                            {/*Adress input */}
                            <Input
                                onChangeText={(value) => {
                                    onChange({key: 'address', value});
                                }}
                                placeholder={user.address}
                                keyboardType="url"
                                labelName={label.address}
                                error={error.address ? error.address : ''}
                            />
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => onSubmit()}>
                                <View style={styles.saveButton}>
                                    <Text style={styles.saveText}>{label.save}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
            )}
    </View>

  );
};

export default ChangeInformationScreen;
