import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;