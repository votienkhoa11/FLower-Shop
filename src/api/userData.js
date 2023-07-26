import AsyncStorage from '@react-native-async-storage/async-storage';

export const userData = async () => {
    const userDataJSON = await AsyncStorage.getItem('user');
    const results = JSON.parse(userDataJSON);

    return results;
};


