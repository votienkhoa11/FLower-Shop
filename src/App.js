/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { View, Text, Platform } from 'react-native';
import React, { useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';

//import screens
//main stack screens
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import NotificationScreen from './screens/NotificationScreen';
import HelpCenterScreen from './screens/HelpCenterScreen';
import AccountSecurityScreen from './screens/AccountSecurityScreen';
import ProdcuctScreen from './screens/ProductScreen';
//main tab screens
import HomeScreen from './screens/HomeScreen/';
import VoucherScreen from './screens/VoucherScreen';
import OrderScreen from './screens/OrderScreen';
// search stack screens
import SearchScreen from './screens/SearchScreen';
import SearchResultScreen from './screens/SearchResultScreen';
//user stack screen
import UserScreen from './screens/UserScreen';
import ChangeInformationScreen from './screens/ChangeInformationScreen';


//import label
import label from './label';
//import style
import defaultStyles from './DefaultStyles';
import { color } from './values/color';

//import icon
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import user
import {user} from './database/MockData';
import store from './app/store';

//import store from './app/store';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const UserStack = createStackNavigator();
const SearchStack = createStackNavigator();

function UserNavigators () {
  return (
    <UserStack.Navigator screenOptions={{headerShown: false}}>
        <UserStack.Screen name = "usermenu" component={UserScreen} />
        <UserStack.Screen name="change" component={ChangeInformationScreen} />
    </UserStack.Navigator>
  );
}

function SearchNavigators () {
    return (
        <SearchStack.Navigator screenOptions={{headerShown: false}}>
            <SearchStack.Screen name = "searchmenu" component={SearchScreen} />
            <SearchStack.Screen name = "searchresult" component={SearchResultScreen} />
        </SearchStack.Navigator>
    );
}

function TabNavigators () {
  const insets = useSafeAreaInsets();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 68 + insets.bottom : 70,
        },
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen name = "home" component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                defaultStyles.tabBarItemView,
                focused ? {borderTopWidth: 2, paddingTop: 0} : null,
              ]}
            >
              <Ionicons name="compass" size={24} color={focused ? color.green : color.mediumBlack} />
              <Text style={defaultStyles.tabLabel}>{label.home}</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen name = "search" component={SearchNavigators}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                defaultStyles.tabBarItemView,
                focused ? {borderTopWidth: 2, paddingTop: 0} : null,
              ]}
            >
              <Ionicons name="search" size={24} color={focused ? color.green : color.mediumBlack} />
              <Text style={defaultStyles.tabLabel}>{label.search}</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen name = "vouncher" component={VoucherScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                defaultStyles.tabBarItemView,
                focused ? {borderTopWidth: 2, paddingTop: 0} : null,
              ]}
            >
              <Ionicons name="gift" size={24} color={focused ? color.green : color.mediumBlack} />
              <Text style={defaultStyles.tabLabel}>{label.vouncher}</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen name = "order" component={OrderScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                defaultStyles.tabBarItemView,
                focused ? {borderTopWidth: 2, paddingTop: 0} : null,
              ]}
            >
              <MaterialCommunityIcons name="clipboard-list" size={24} color={focused ? color.green : color.mediumBlack} />
              <Text style={defaultStyles.tabLabel}>{label.order}</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen name = "user" component={UserNavigators}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                defaultStyles.tabBarItemView,
                focused ? {borderTopWidth: 2, paddingTop: 0} : null,
              ]}
            >
              <FontAwesome name="user" size={24} color={focused ? color.green : color.mediumBlack} />
              <Text style={defaultStyles.tabLabel}>{label.user}</Text>
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function App() {
    const saveUser = async () => {
        const userJSON = await AsyncStorage.getItem('user');

        if (userJSON === null) {
          await AsyncStorage.setItem('user', JSON.stringify(user));
        } else {
            return null;
        }
    };

  useEffect(() => {
    try {
        saveUser();
    } catch (e) {
        console.log(e);
    }

}, []);

  return (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="tab" component = {TabNavigators} />
                <Stack.Screen name="product" component= {ProdcuctScreen} />
                <Stack.Screen name="payment" component={PaymentMethodScreen} />
            <Stack.Screen name="notification" component={NotificationScreen} />
            <Stack.Screen name="support" component={HelpCenterScreen} />
            <Stack.Screen name="security" component={AccountSecurityScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

export default App;
