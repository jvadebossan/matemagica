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
import Level from './views/Level';
import Passed from './views/Passed';

import {createContext} from 'react'

import Stores from './store'
export const RootContext = createContext()

const Stack = createStackNavigator();

const App = () => {
	return (
		<RootContext.Provider value={Stores}>
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
					<Stack.Screen
						name="Level"
						component={Level}
						options={{
							//disable top header
							headerShown: false
						}}
					/>
					<Stack.Screen
						name="Passed"
						component={Passed}
						options={{
							//disable top header
							headerShown: false
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</RootContext.Provider>
	)
}

export default App