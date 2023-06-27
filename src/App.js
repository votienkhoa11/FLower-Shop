import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {Provider} from 'react-redux';

//import screens
import Login from './screens/Login';
import SignUp from './screens/Signup';

//import store from './app/store';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="login" component = {Login} />
          <Stack.Screen name="signup" component = {SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

