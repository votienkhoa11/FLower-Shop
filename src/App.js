/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//import {Provider} from 'react-redux';

//import screens
import HomeScreen from './screens/HomeScreen/';
import SearchScreen from './screens/SearchScreen';
import VoucherScreen from './screens/VoucherScreen';
import OrderScreen from './screens/OrderScreen';
import UserScreen from './screens/UserScreen';

//import label
import label from './label';
//import style
import { color } from './styles';

//import icon
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import store from './app/store';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function TabNavigators () {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#36a46d',
        tabBarInactiveTintColor: color.black,
        tabBarStyle: {
          height: 70,
          paddingBottom: 16,
        },
      }}
    >
      <BottomTab.Screen name = {label.home} component={HomeScreen}
        options={{
          tabBarIcon: ({}) => (
            <Ionicons name="compass" size={24} />
          ),
        }}
      />
      <BottomTab.Screen name = {label.search} component={SearchScreen}
        options={{
          tabBarIcon: ({}) => (
            <Ionicons name="search" size={24} />
          ),
        }}
      />
      <BottomTab.Screen name = {label.vouncher} component={VoucherScreen}
        options={{
          tabBarIcon: ({}) => (
            <Ionicons name="gift" size={24} />
          ),
        }}
      />
      <BottomTab.Screen name = {label.order} component={OrderScreen}
        options={{
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons name="clipboard-list" size={24} />
          ),
        }}
      />
      <BottomTab.Screen name = {label.user} component={UserScreen}
        options={{
          tabBarIcon: ({}) => (
            <FontAwesome name="user" size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="tab" component = {TabNavigators} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

