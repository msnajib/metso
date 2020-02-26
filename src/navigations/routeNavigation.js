import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../screens/Login';
import Register from './../screens/Register';
import Feed from './../screens/Feed';
import DetailPost from './../screens/DetailPost';
import CreatePost from './../screens/CreatePost';
import CreateComment from './../screens/CreateComment';

const Stack = createStackNavigator();

function RouteNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={"Login"}>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Feed" component={Feed} />
				<Stack.Screen name="DetailPost" component={DetailPost} />
				<Stack.Screen name="CreatePost" component={CreatePost} />
				<Stack.Screen name="CreateComment" component={CreateComment} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default RouteNavigation;