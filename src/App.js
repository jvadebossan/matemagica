import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

//components
import Home from './views/Home';
import Levels from './views/Levels';

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            //disable top header
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Levels"
          component={Levels}
          options={{
            //disable top header
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App