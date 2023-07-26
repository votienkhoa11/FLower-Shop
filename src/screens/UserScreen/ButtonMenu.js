import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

//import style
import styles from './styles';
import { color } from '../../DefaultStyles';

//import icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import label from './label';

const ButtonMenu = ({name}) => {
    const navigation = useNavigation();

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

    const handleOnPress = () => {
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

    return (
    <Pressable
        style={({pressed}) => [
            styles.button, {
                backgroundColor: pressed ?
                    color.greenLight :
                    color.bgWhite,
            },
        ]}
        onPress={() => handleOnPress()}
    >
        <View style={styles.buttonView}>
                {
                    //insert icon for each buttons
                    name === label.order ?
                        <MaterialCommunityIcons name="clipboard-list" size={16} color={color.gray} />
                    : name === label.deal ?
                        <MaterialCommunityIcons name="gift" size={16} color={color.gray} />
                    : name === label.paymentMethod ?
                        <Entypo name="credit-card" size={16} color={color.gray} />
                    : name === label.notification ?
                        <Ionicons name="notifications" size={16} color={color.gray} />
                    : name === label.helpCenter ?
                        <SimpleLineIcons name="question" size={16} color={color.gray} />
                    : name === label.accountSecurity ?
                        <MaterialCommunityIcons name="security" size={16} color={color.gray} />
                    : name === label.logOut ?
                        <Entypo name="log-out" size={16} color={color.gray} />
                    : name === label.deleteAccount ?
                        <Ionicons name="trash-sharp" size={16} color={color.gray} />
                    : null
                }
                <Text style={styles.labelButton}>{name}</Text>
            </View>
    </Pressable>
  );
};

export default ButtonMenu;
