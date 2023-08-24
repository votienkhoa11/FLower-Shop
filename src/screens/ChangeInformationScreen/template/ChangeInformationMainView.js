/* eslint-disable react-native/no-inline-styles */
import { View, Text, StatusBar, ScrollView,
    KeyboardAvoidingView, 
    Platform} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CountryPicker } from 'react-native-country-codes-picker';

//import styles
import defaultStyles, { color } from '../../../DefaultStyles';
import styles from '../styles';

//import icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

//import data
import label from '../label';

//import components
import Avatar from '../../UserScreen/template/subView/Avatar';
import Input from './subView/Input';
import DropDownInput from './subView/DropDownInput';
import LoadingScreen from '../../../Components/LoadingScreen';

const ChangeInformationMainView = (props) => {
    const {
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
    } = props;

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
                                        value = value ? countryCode + value : '';
                                        onChange({key: 'phone', value});
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
                                    display = {Platform.OS === "ios" ? "spinner" : "calendar"}
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

export default ChangeInformationMainView;
