/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { View, Text } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
import defaultStyles, { color } from './DefaultStyles';

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
              <Text style={defaultStyles.tabLabel}>{label.home}</Text>
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
      <BottomTab.Screen name = "user" component={UserScreen}
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
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="tab" component = {TabNavigators} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

