import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const signUp = async (username, password, confirmPassword, email, phone) => {

    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let phoneReg = /^(0|08[0-9]{0,9})$/;

    if (username === '' || password === '' || confirmPassword === '' || email === '' || phone === '') {
        Alert.alert('Error', 'Please fill the form!');
    } 
    else if (emailReg.test(email) === false) {
        Alert.alert('Error', 'Invalid email. Please try again');
    } 
    else if (phoneReg.test(phone) === false && phone.length < 10) {
        Alert.alert('Error', 'Invalid phone number. Please try again!');
    } 
    else if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords are not same, Please try again!');
    } 
    else {
        try {
            const result = await AsyncStorage.getItem(username);

            if (result !== null) {
                Alert.alert('Error', 'your account is already created! Press "OK" to login!', [
                    {
                        text: 'Cancel',
                    },
                    {
                        text: 'OK',
                    },
                ]);
            } else {
                const user = {
                    username: username,
                    password: password,
                    email: email,
                    phone: phone,
                };

                await AsyncStorage.setItem(username, JSON.stringify(user));
                Alert.alert('Success', 'Your account is successfully created!', [
                    {
                        text: 'Cancel',
                    },
                    {
                        text: 'OK',
                    },
                ]);
            }
        } catch (e) {
            console.log(e);
        }
    }
};

export default signUp;
