/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import {Provider} from 'react-redux';

//import screens
import HomeScreen from './screens/HomeScreen/';
import SearchScreen from './screens/SearchScreen';
import VoucherScreen from './screens/VoucherScreen';
import OrderScreen from './screens/OrderScreen';
//user stack screen
import UserScreen from './screens/UserScreen';
import ChangeInformationScreen from './screens/UserScreen/ChangeInformationScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import NotificationScreen from './screens/NotificationScreen';
import HelpCenterScreen from './screens/HelpCenterScreen';
import AccountSecurityScreen from './screens/AccountSecurityScreen';

//import label
import label from './label';
//import style
import defaultStyles, { color } from './DefaultStyles';

//import icon
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import user
import {user} from './database/MockData';

//import store from './app/store';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const UserStack = createNativeStackNavigator();

const saveUser = async () => {
  const userJSON = await AsyncStorage.getItem('user');

  if (userJSON === null) {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  }
};

function UserNavigators () {

  return (
    <UserStack.Navigator screenOptions={{headerShown: false}}>
      <UserStack.Screen name="usermenu" component={UserScreen} />
      <UserStack.Screen name="payment" component={PaymentMethodScreen} />
      <UserStack.Screen name="notification" component={NotificationScreen} />
      <UserStack.Screen name="support" component={HelpCenterScreen} />
      <UserStack.Screen name="security" component={AccountSecurityScreen} />
      <UserStack.Screen name="change" component={ChangeInformationScreen} />
    </UserStack.Navigator>
  );
}

function TabNavigators () {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color.green,
        tabBarInactiveTintColor: color.me,
        tabBarStyle: {
          height: 70,
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
              <Text
                style={[
                  defaultStyles.tabLabel,
                  focused ? {color: color.green} : {color: color.mediumBlack},
                ]}
                >{label.home}</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen name = "search" component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                defaultStyles.tabBarItemView,
                focused ? {borderTopWidth: 2, paddingTop: 0} : null,
              ]}
            >
              <Ionicons name="search" size={24} color={focused ? color.green : color.mediumBlack} />
              <Text
                style={[
                  defaultStyles.tabLabel,
                  focused ? {color: color.green} : {color: color.mediumBlack},
                ]}
                >{label.search}</Text>
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
              <Text
                style={[
                  defaultStyles.tabLabel,
                  focused ? {color: color.green} : {color: color.mediumBlack},
                ]}
                >{label.vouncher}</Text>
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
              <Text
                style={[
                  defaultStyles.tabLabel,
                  focused ? {color: color.green} : {color: color.mediumBlack},
                ]}
                >{label.order}</Text>
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
              <Text
                style={[
                  defaultStyles.tabLabel,
                  focused ? {color: color.green} : {color: color.mediumBlack},
                ]}
                >{label.user}</Text>
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function App() {

  useEffect(() => {
    saveUser();
}, []);

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="tab" component = {TabNavigators} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

