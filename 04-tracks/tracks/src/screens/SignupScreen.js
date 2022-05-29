import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
	const { state, signup } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<AuthForm
				headerText='Sign Up for Tracker'
				errorMessage={state.errorMessage}
				submitButtonText='Sign up'
				onSubmit={signup}
			/>
			<NavLink routeName='Signin' text='Already have an account? Sign in instead.' />
		</View>
	);
};

// Navigation options can be either a function or object in most cases
SignupScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 80,
	},
});

export default SignupScreen;
