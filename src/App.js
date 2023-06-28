import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {Provider} from 'react-redux';

//import screens
import Home from './screens/HomeScreen';

//import store from './app/store';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="home" component = {Home} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

