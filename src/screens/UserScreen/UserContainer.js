import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import data
import label from './label';
import { user } from '../../database/MockData';

//import template
import UserMainView from './template/UserMainView';

const getNavigationRoute = (buttonName) => {
    switch (buttonName) {
        case label.order:
            return 'order';

        case label.deal:
            return 'vouncher';

        case label.paymentMethod:
            return 'payment';

        case label.notification:
            return 'notification';

        case label.helpCenter:
            return 'support';

        case label.accountSecurity:
            return 'security';

        default:
            return '';
    }
};

const UserContainer = (props) => {
    const {
        navigation,
    } = props;

    const [loading, setLoading] = useState(true);

    const [userInfo, setUser] = useState({});
    const [avatar, setAvatar] = useState('');

    //get user data
    const getUserData = async () => {
        const userJSON = await AsyncStorage.getItem('user');

        if (userJSON === null) {
            setUser(user);
        } else {
            const savedUser = JSON.parse(userJSON);
            setUser(savedUser);
            const uriAvatar = savedUser.avatar;
            setAvatar(uriAvatar);
        }

        setLoading(false);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUserData();
        });

        return unsubscribe;
    }, [navigation]);

    const userProps = {
         //values
         loading,
         avatar,
         userInfo,
         //functions
         navigation,
    };

  return <UserMainView {...userProps} />;
};

export const handleOnPress = ({name, navigation}) => {
    const routeName = getNavigationRoute(name);

    if (routeName === '') {
        if (name === label.logOut) {
            console.log('Log out button pressed');
        } else {
            console.log('delete account button pressed');
        }
    } else {
        navigation.navigate(routeName);
    }
};

export default UserContainer;
