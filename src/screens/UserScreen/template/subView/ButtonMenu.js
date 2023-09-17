import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { handleOnPress } from '../../UserContainer';

//import style
import styles from '../../styles';
import { color } from '../../../../values/color';

//import icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import label from '../../label';

const ButtonMenu = ({name}) => {
    const navigation = useNavigation();

    return (
    <Pressable
        style={({pressed}) => [
            styles.button, {
                backgroundColor: pressed ?
                    color.greenLight :
                    color.bgWhite,
            },
        ]}
        onPress={() => handleOnPress({name, navigation})}
    >
        <View style={styles.buttonView}>
                {
                    //insert icon for each buttons
                    name === label.order ?
                        <MaterialCommunityIcons name="clipboard-list" style={styles.buttonIcon} />
                    : name === label.deal ?
                        <MaterialCommunityIcons name="gift" style={styles.buttonIcon} />
                    : name === label.paymentMethod ?
                        <Entypo name="credit-card" style={styles.buttonIcon} />
                    : name === label.notification ?
                        <Ionicons name="notifications" style={styles.buttonIcon} />
                    : name === label.helpCenter ?
                        <SimpleLineIcons name="question" style={styles.buttonIcon} />
                    : name === label.accountSecurity ?
                        <MaterialCommunityIcons name="security" style={styles.buttonIcon} />
                    : name === label.logOut ?
                        <Entypo name="log-out" style={styles.buttonIcon} />
                    : name === label.deleteAccount ?
                        <Ionicons name="trash-sharp" style={styles.buttonIcon} />
                    : null
                }
                <Text style={styles.labelButton}>{name}</Text>
            </View>
    </Pressable>
  );
};

export default ButtonMenu;
