/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';

//import style
import defaultStyles from '../../DefaultStyles';
import styles from './styles';
import { color } from '../../DefaultStyles';

//import icons
import Feather from 'react-native-vector-icons/Feather';

//import data
import label from './label';

//import components
import OrderList from './Components/OrderList';
import LoadingScreen from '../../Components/LoadingScreen';

const OrderScreen = ({navigation}) => {
    const [loading, setLoading] = useState(true);

    const getDataformDB = () => {
        setLoading(false);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataformDB();
        });

      return unsubscribe;
  }, [navigation]);

    return (
    <View style={defaultStyles.container} >
        <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
        { loading ? <LoadingScreen /> :
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerLabel}>{label.orderTitle}</Text>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <TouchableOpacity>
                                <Feather name="search" style={styles.searchButton} />
                            </TouchableOpacity>
                        </View>
                </View>
                <View>
                    <Text>All</Text>
                </View>
                <View>
                    <OrderList />
                </View>
            </View>
        }
    </View>
  );
};

export default OrderScreen;
