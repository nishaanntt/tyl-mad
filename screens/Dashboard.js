import { StyleSheet, Text, View } from 'react-native';
const Dashboard = () => {
	return (
		<View style={styles.container}>
			<Text>Dashboard</Text>
		</View>
	);
};
export default Dashboard;
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
	},
});
