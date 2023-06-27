import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const clearItem = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        console.log(e);
    }
};

export {clearItem};

const login = async (username, password) => {
    if (username === '' || password === '') {
        Alert.alert('Error', 'Please fill the form!');
    }
    else {
        try {
            const resultJSON = await AsyncStorage.getItem(username);
            if (resultJSON !== null) {
                const result = JSON.parse(resultJSON);

                if (password === result.password){
                    Alert.alert('Success', 'You have successfully logged in!');
                } else {
                    Alert.alert('Wrong user name or password, please try again!');
                }
            }  else {
                Alert.alert('Error', 'Your username is not created!');
            }
        } catch (e) {
            console.log(e);
        }
    }
};


export default login;
