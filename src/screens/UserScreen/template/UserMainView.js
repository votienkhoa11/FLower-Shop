/* eslint-disable react-native/no-inline-styles */
import { Text, View, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
    import React from 'react';

//import style
import defaultStyles from '../../../DefaultStyles';
import styles from '../styles';
import { color } from '../../../values/color';

//import icons
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import components
import LoadingScreen from '../../../Components/LoadingScreen';
import label from '../label';
import ButtonMenu from './subView/ButtonMenu';
import Avatar from './subView/Avatar';

const UserMainView = (props) => {
    const {
        //values
        loading,
        avatar,
        userInfo,
        //functions
        navigation,
    } = props;

  return (
    loading ? <LoadingScreen /> :
    <View style={styles.header}>
        <View>
            <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
            <ScrollView>
                {/*User profile */}
                <View style={styles.userProfile}>
                    <Avatar sourceImg={avatar} />
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
                <View style={[styles.changeButtonContainer, defaultStyles.shadow]}>
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
    </View>
  );
};

export default UserMainView;
