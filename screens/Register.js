import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = '';

	const navigation = useNavigation();

	const navigateLogin = () => {
		navigation.goBack();
	};

	return (
		<SafeAreaView style={[styles.safeContainer]}>
			<KeyboardAwareScrollView>
				<View style={styles.container}>
					{/* <Text style={styles.logo}>Register</Text> */}
					<View style={styles.formContainer}>
						<View style={styles.field}>
							<Text style={styles.label}>First Name</Text>
							<TextInput
								placeholder='John'
								style={styles.input}
								value={email}
								onChangeText={setEmail}
							/>
						</View>
						<View style={styles.field}>
							<Text style={styles.label}>Last Name</Text>
							<TextInput
								placeholder='Doe'
								style={styles.input}
								value={email}
								onChangeText={setEmail}
							/>
						</View>
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
						<View style={styles.field}>
							<Text style={styles.label}>Confirm Password</Text>
							<TextInput
								placeholder='password'
								style={styles.input}
								value={password}
								onChangeText={setPassword}
							/>
						</View>
						<TouchableOpacity>
							<View style={styles.button}>
								<Text style={styles.buttonText}>Register</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.registerContainer}>
						<Text>Already have an account? </Text>
						<TouchableOpacity onPress={navigateLogin}>
							<Text style={styles.linkText}>Login.</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};
export default Register;

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
		marginBottom: 20,
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
		marginTop: 20,
	},
	buttonText: {
		color: '#eee',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	registerContainer: {
		flexDirection: 'row',
		marginTop: 0,
		justifyContent: 'center',
	},
	linkText: {
		color: 'maroon',
		fontWeight: 'bold',
	},
});
