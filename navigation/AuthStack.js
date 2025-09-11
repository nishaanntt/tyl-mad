import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Register from '../screens/Register';
import UserTabs from './UserTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const isLoggedIn = true;

const AuthStack = () => {
	return (
		<Stack.Navigator initialRouteName={isLoggedIn ? 'User' : 'Login'}>
			{isLoggedIn ? (
				<>
					<Stack.Screen
						name='User'
						component={UserTabs}
						options={{ headerShown: false }}
					/>
				</>
			) : (
				<>
					<Stack.Group
						screenOptions={{
							headerShown: false,
						}}>
						<Stack.Screen name='Login' component={Login} />
						<Stack.Screen name='Register' component={Register} />
					</Stack.Group>
				</>
			)}
		</Stack.Navigator>
	);
};
export default AuthStack;
