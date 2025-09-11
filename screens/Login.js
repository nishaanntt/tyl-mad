import {
	Keyboard,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const Login = () => {
	const navigation = useNavigation();

	const [email, setEmail] = useState('');
	const [password, setPassword] = '';

	const handleRegister = () => {
		navigation.navigate('Register');
	};

	return (
		<SafeAreaView style={[styles.safeContainer]}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<Text style={styles.logo}>CMR Institute of Technology</Text>
					<View style={styles.formContainer}>
						<View style={styles.field}>
							<Text style={styles.label}>Email</Text>
							<TextInput
								placeholder='abc@example.com'
								keyboardType='email-address'
								style={styles.input}
								value={email}
								onChangeText={setEmail}
							/>
						</View>
						<View style={styles.field}>
							<Text style={styles.label}>Password</Text>
							<TextInput
								placeholder='password'
								secureTextEntry
								style={styles.input}
								value={password}
								onChangeText={setPassword}
							/>
						</View>
						<TouchableOpacity>
							<View style={styles.button}>
								<Text style={styles.buttonText}>Login</Text>
							</View>
						</TouchableOpacity>
						<View style={styles.registerContainer}>
							<Text>Don't have an account yet? </Text>
							<TouchableOpacity onPress={handleRegister}>
								<Text style={styles.linkText}>Register here</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
};
export default Login;

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	logo: {
		textAlign: 'center',
		fontSize: 24,
		fontWeight: '600',
		marginBottom: 50,
	},
	formContainer: {
		padding: 16,
	},
	field: {
		marginBottom: 15,
	},
	label: {
		marginBottom: 5,
	},
	input: {
		backgroundColor: '#eee',
		padding: 10,
		borderRadius: 10,
	},
	button: {
		backgroundColor: 'navy',
		padding: 16,
		borderRadius: 10,
		marginTop: 50,
	},
	buttonText: {
		color: '#eee',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	registerContainer: {
		flexDirection: 'row',
		marginTop: 10,
		justifyContent: 'center',
	},
	linkText: {
		color: 'maroon',
		fontWeight: 'bold',
	},
});
