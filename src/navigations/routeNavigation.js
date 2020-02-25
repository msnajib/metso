import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../screens/Login';
import Register from './../screens/Register';
import Feed from './../screens/Feed';

const Stack = createStackNavigator();

function RouteNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={"Login"}>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Feed" component={Feed} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default RouteNavigation;