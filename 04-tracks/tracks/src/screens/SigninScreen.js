import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
	const { state, signin } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<AuthForm
				headerText='Sign In to Tracker'
				errorMessage={state.errorMessage}
				submitButtonText='Sign in'
				onSubmit={signin}
			/>
			<NavLink routeName='Signup' text="Don't have an account? Sign up instead" />
		</View>
	);
};

// Navigation options can be either a function or object in most cases
SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
