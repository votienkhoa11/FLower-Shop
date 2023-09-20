/* eslint-disable react-native/no-inline-styles */
import { View, Text, StatusBar, ScrollView, KeyboardAvoidingView,
    Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CountryPicker } from 'react-native-country-codes-picker';

//import styles
import defaultStyles from '../../../DefaultStyles';
import styles from '../styles';
import { color } from '../../../values/color';

//import icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

//import data
import label from '../label';

//import components
import Avatar from '../../UserScreen/template/subView/Avatar';
import TextInputComponent from '../../../Components/TextInput/TextInputComponent';
import DropDownInput from './subView/DropDownInput';
import LoadingScreen from '../../../Components/LoadingScreen';

const LabelTextInput = ({labelText}) => {
    return (
        <View style={styles.labelInput}>
            <Text style={styles.labelText}>{labelText}</Text>
            <Text style={styles.starText}>*</Text>
        </View>
    );
};

const CodePhoneButton = ({codePhone}) => {
    return (
        <View style={styles.codePhoneContainer}>
            <View style={styles.textIconContainer}>
                <Text style={styles.codePhoneText}>{codePhone}</Text>
                <Entypo name="chevron-small-down" size={14} color={color.bgMedium} />
            </View>
        </View>
    );
};

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
    loading ? <LoadingScreen /> :

    <View style={defaultStyles.container}>
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
                        <Entypo name="edit"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputList}>
                    {/*Name input */}
                    <View style={styles.inputView}>
                        <TextInputComponent
                            onChangeText={(value) => {
                                onChange({key: 'name', value});
                            }}
                            placeholder={user.name}
                            error={error.name && error.name}
                            style={styles.input}
                            textInputStyle={{paddingLeft: 12}}
                        />
                        <LabelTextInput labelText={label.name} />
                    </View>
                    {/*Phone number input */}
                    <View style={styles.inputView}>
                        <TextInputComponent
                            onChangeText={(value) => {
                                value = value ? countryCode + value : '';
                                onChange({key: 'phone', value});
                            }}
                            placeholder={user.phone}
                            keyboardType="numeric"
                            leftIcon={
                                <CodePhoneButton codePhone={countryCode} />
                            }
                            onPressleftIcon={() => {
                                setShow(true);
                            }}
                            error={error.phone && error.phone}
                            style={styles.input}
                            textInputStyle={{paddingLeft: 8}}
                        />
                        <LabelTextInput labelText={label.phoneNumber} />
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
                        showOnly={['vn', 'RU', 'AU']}
                        style={styles.countryPickerModal}
                    />
                    {/*Email input */}
                    <View style={styles.inputView}>
                        <TextInputComponent
                            onChangeText={(value) => {
                                onChange({key: 'email', value});
                            }}
                            placeholder={user.email}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            error={error.email ? error.email : ''}
                            style={styles.input}
                            textInputStyle={{paddingLeft: 12}}
                        />
                        <LabelTextInput labelText={label.email} />
                    </View>
                    {/*Birthday input*/}
                    { showDatePicker ? (
                        <DateTimePicker
                            mode="date"
                            display = {Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                            value={date}
                            onChange={onChangeDate}
                        />
                    ) : null}
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => toggleDatePicker()}
                    >
                        <View style={styles.inputView}>
                            <TextInputComponent
                                onChangeText={setDateString}
                                value={dateString}
                                editable={false}
                                error={error.birthday ? error.birthday : ''}
                                rightIcon={
                                    <Entypo name="calendar" style={styles.calendarIcon}/>
                                }
                                style={styles.input}
                                textInputStyle={{paddingLeft: 12}}
                            />
                        </View>
                        <LabelTextInput labelText={label.birthday} />
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
                    {/*<Input
                        onChangeText={(value) => {
                            onChange({key: 'address', value});
                        }}
                        placeholder={user.address}
                        keyboardType="url"
                        labelName={label.address}
                        error={error.address ? error.address : ''}
                    />*/}
                    <View style={styles.inputView}>
                        <TextInputComponent
                             onChangeText={(value) => {
                                onChange({key: 'address', value});
                            }}
                            placeholder={user.address}
                            keyboardType="url"
                            error={error.address ? error.address : ''}
                            style={styles.input}
                            textInputStyle={{paddingLeft: 12}}
                        />
                        <LabelTextInput labelText={label.address} />
                    </View>
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
  );
};

export default ChangeInformationMainView;
