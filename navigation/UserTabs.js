import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

const UserTabs = () => {
	return (
		<Tabs.Navigator>
			<Tabs.Screen name='Home' component={Dashboard} />
			<Tabs.Screen name='Settings' component={Settings} />
		</Tabs.Navigator>
	);
};

export default UserTabs;
