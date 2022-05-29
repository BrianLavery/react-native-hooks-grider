import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../contexts/AuthContext';

const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit }) => {
	const { clearErrorMessage } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const emailTextChange = (value) => {
		setEmail(value);
		clearErrorMessage();
	};

	const passwordTextChange = (value) => {
		setPassword(value);
		clearErrorMessage();
	};

	return (
		<React.Fragment>
			<Spacer>
				<Text h3>{headerText}</Text>
			</Spacer>

			<Input label='Email' value={email} onChangeText={emailTextChange} autoCapitalize='none' autoCorrect={false} />
			<Spacer />

			<Input
				label='Password'
				value={password}
				onChangeText={setPassword}
				autoCapitalize='none'
				autoCorrect={false}
				secureTextEntry
			/>

			{errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

			<Spacer>
				<Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
			</Spacer>
		</React.Fragment>
	);
};

const styles = StyleSheet.create({
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginHorizontal: 15,
	},
});

export default AuthForm;

// <NavigationEvents onWillFocus={clearErrorMessage}
