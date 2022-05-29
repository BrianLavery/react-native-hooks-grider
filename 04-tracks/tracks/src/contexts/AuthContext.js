import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../apis/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signin':
			return { ...state, token: action.payload, errorMessage: '' };
		case 'clear_error_message':
			return { ...state, errorMessage: '' };
		default:
			return state;
	}
};

const signup =
	(dispatch) =>
	async ({ email, password }) => {
		try {
			const response = await trackerApi.post('/signup', { email, password });
			await AsyncStorage.setItem('token', response.data.token); // We use this to store token on our phone
			dispatch({ type: 'signin', payload: response.data.token });
			navigate('TrackList');
		} catch (error) {
			dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
		}
	};

const signin =
	(dispatch) =>
	async ({ email, password }) => {
		try {
			const response = await trackerApi.post('/signin', { email, password });
			await AsyncStorage.setItem('token', response.data.token);
			dispatch({ type: 'signin', payload: response.data.token });
			navigate('TrackList');
		} catch (error) {
			console.log(error);
			dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
		}
	};

const signout = (dispatch) => {
	return () => {
		// somehow sign out
	};
};

const clearErrorMessage = (dispatch) => () => {
	dispatch({ type: 'clear_error_message' });
};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signin, signout, signup, clearErrorMessage },
	{ isSignedIn: false, errorMessage: '' }
);
