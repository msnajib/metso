import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../screens/Login';

const Stack = createStackNavigator();

function RouteNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={"Login"}>
				<Stack.Screen name="Login" component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default RouteNavigation;