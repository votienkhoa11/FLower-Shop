/* eslint-disable react-native/no-inline-styles */
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
    import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


//import style
import defaultStyles from '../../DefaultStyles';
import styles from './styles';
import { color } from '../../DefaultStyles';

//import icons
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import data
import { user } from '../../database/MockData';

//import components
import LoadingScreen from '../Components/LoadingScreen';
import label from './label';
import ButtonMenu from './ButtonMenu';
import Avatar from './Avatar';
import { uriHeader } from './Avatar';

const UserScreen = ({navigation}) => {
    const [loading, setLoading] = useState(true);

    const [userInfo, setUser] = useState({});

    //get user data
    const getUserData = async () => {
        const userJSON = await AsyncStorage.getItem('user');

        if (userJSON === null) {
            setUser(user);
        } else {
            const savedUser = JSON.parse(userJSON);
            setUser(savedUser);
        }

    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            await getUserData();
            setLoading(false);
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={[defaultStyles.container, {backgroundColor: color.greenWhite}]}>
            { loading ? (
                    <LoadingScreen />
                ) : (
                    <View style={defaultStyles.safeView}>
                        <ScrollView>
                            {/*User profile */}
                            <View style={styles.userProfile}>
                                <Avatar source={uriHeader + userInfo.avatar} />
                                <Text style={styles.name}>{userInfo.name}</Text>
                                <View style={styles.memberView}>
                                    <MaterialCommunityIcons
                                        name={userInfo.member === 'diamond' ? 'diamond-stone' : 'medal'}
                                        size={20}
                                        style={{
                                            color: userInfo.member === 'diamond' ? color.diamond
                                                    : userInfo.member === 'gold' ? color.gold
                                                    : userInfo.member === 'sliver' ? color.lightDark
                                                    : color.brown,
                                        }}
                                    />
                                    <Text style={styles.infoText}>{label.member}{
                                        userInfo.member === 'diamond' ? label.diamond
                                            : userInfo.member === 'gold' ? label.gold
                                            : userInfo.member === 'sliver' ? label.sliver
                                            : label.brown
                                    }</Text>
                                </View>
                                <Text>{userInfo.phone}</Text>
                            </View>
                            {/*Change button */}
                            <View style={styles.changeButtonContainer}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('change')}>
                                    <Entypo name="edit" style={styles.changeIcon} />
                                </TouchableOpacity>
                            </View>
                            {/*Account menu */}
                            <View>
                                <Text style={styles.label}>{label.account}</Text>
                                <View style={{paddingVertical: 8}}>
                                    <ButtonMenu name={label.order} />
                                    <ButtonMenu name={label.deal} />
                                    <ButtonMenu name={label.paymentMethod} />
                                    <ButtonMenu name={label.notification} />
                                    <ButtonMenu name={label.helpCenter} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.label}>{label.accountManagement}</Text>
                                <View style={{paddingVertical: 8}}>
                                    <ButtonMenu name={label.accountSecurity} />
                                    <ButtonMenu name={label.logOut} />
                                    <ButtonMenu name={label.deleteAccount} />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                )
            }
        </View>
    );
};

export default UserScreen;
