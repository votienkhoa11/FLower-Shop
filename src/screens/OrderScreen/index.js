/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import React, {useState, useEffect} from 'react';

//import style
import defaultStyles from '../../DefaultStyles';
import styles from './styles';

//import icons
import Feather from 'react-native-vector-icons/Feather';

//import data
import label from './label';

//import components
import LoadingScreen from '../../Components/LoadingScreen';
import Navigations from './Navigations';

const OrderScreen = ({navigation}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(false);
        });

      return unsubscribe;
  }, [navigation]);

    return (
    <View style={defaultStyles.container} >
        <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
        { loading ? <LoadingScreen /> :
            <View style={{flex: 1}}>
                <View style={styles.header}>
                    <Text style={styles.headerLabel}>{label.orderTitle}</Text>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <TouchableOpacity>
                                <Feather name="search" style={styles.searchButton} />
                            </TouchableOpacity>
                        </View>
                </View>
                <Navigations />
            </View>
        }
    </View>
  );
};

export default OrderScreen;
