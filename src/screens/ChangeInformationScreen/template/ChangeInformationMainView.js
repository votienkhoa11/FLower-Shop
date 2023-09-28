/* eslint-disable react-native/no-inline-styles */
import { View, Text, StatusBar, ScrollView, KeyboardAvoidingView,
    Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CountryPicker } from 'react-native-country-codes-picker';
import Modal  from 'react-native-modal';

//import styles
import defaultStyles from '../../../DefaultStyles';
import styles from '../styles';
import { color } from '../../../values/color';

//import icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

//import data
import label from '../label';

//import components
import Avatar from '../../UserScreen/template/subView/Avatar';
import ChangeButton from '../../UserScreen/template/subView/ChangeButton';
import TextInputComponent from '../../../Components/TextInput/TextInputComponent';
import Button from '../../../Components/Buttons/Button';
import ModalGender from './subView/ModalGender';
import LoadingScreen from '../../../Components/LoadingScreen';
import LabelTextInput from './subView/LabelTextInput';

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
        modalVisible,
        gender,
        //functions
        getAvatar,
        onChange,
        setShow,
        setCountryCode,
        onChangeDate,
        toggleDatePicker,
        setDateString,
        onPressGenderInput,
        onSubmit,
    } = props;

  return (
    loading ? <LoadingScreen /> :

    <View style={defaultStyles.container}>
        <StatusBar translucent={true} backgroundColor="transparent" barstyles="dark-content" />
        <ScrollView keyboardShouldPersistTaps="handled" >
            <KeyboardAvoidingView>
                {/*Header bar */}
                <TouchableOpacity
                    onPress={() =>{
                        navigation.goBack(null);
                    }}
                >
                    <View style={styles.header}>
                        <Ionicons name="chevron-back-outline" size={24} color={color.black} />
                        <Text style={styles.headerText}>{label.editInformation}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.avatarView}>
                    <Avatar sourceImg={user.avatar} />
                    <View style={styles.changeButtonContainer}>
                        <ChangeButton
                            onPress={() => getAvatar()}
                            iconSize={7}
                            style={styles.changeButton}
                        />
                    </View>
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
                        style={styles.inputView}
                    >
                        <TextInputComponent
                            onChangeText={setDateString}
                            value={dateString}
                            editable={false}
                            error={error.birthday ? error.birthday : ''}
                            rightIcon={
                                <Entypo name="calendar" style={styles.calendarIcon}/>
                            }
                            onPressRightIcon={() => toggleDatePicker()}
                            style={styles.input}
                            textInputStyle={{paddingLeft: 12}}
                        />
                        <LabelTextInput labelText={label.birthday} />
                    </TouchableOpacity>
                    {/*Gender input */}
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => onPressGenderInput()}
                        style={styles.inputView}
                    >
                        <TextInputComponent
                            value={gender}
                            editable={false}
                            style={styles.input}
                            textInputStyle={{paddingLeft: 12}}
                            rightIcon={
                                <AntDesign name="down" style={styles.downIcon} />
                            }
                            onPressRightIcon={() => onPressGenderInput()}
                        />
                        <LabelTextInput labelText={label.gender} />
                    </TouchableOpacity>
                    <Modal
                        isVisible={modalVisible}
                        hasBackdrop={true}
                        backdropOpacity={0.3}
                        swipeDirection={['down']}
                        onBackButtonPress={() => onPressGenderInput()}
                        onBackdropPress={() => onPressGenderInput()}
                        style={styles.modalStyle}
                    >
                        <ModalGender {...props} />
                    </Modal>
                    {/*Adress input */}
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
               {/*<TouchableOpacity onPress={() => onSubmit()}>
                    <View style={styles.saveButton}>
                        <Text style={styles.saveText}>{label.save}</Text>
                    </View>
                </TouchableOpacity>*/}
                <Button
                    onPress={() => onSubmit()}
                    text={label.save}
                    fontSize={16}
                    fontWeight="500"
                    textColor={color.bgWhite}
                    width={122}
                    backgroundColor={color.green}
                    style={styles.saveButton}
                />
            </KeyboardAvoidingView>
        </ScrollView>
    </View>
  );
};

export default ChangeInformationMainView;
