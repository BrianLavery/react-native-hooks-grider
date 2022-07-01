import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import baseURL from '../environment/ngrok';

const instance = axios.create({
	baseURL,
});

// Pass in 2 functions
instance.interceptors.request.use(
	// First function called anytime we make a request
	async (config) => {
		const token = await AsyncStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	// Second function called anytime we have an error in making the request
	(error) => {
		return Promise.reject(error); // We return a new promise that is by default rejected with the error
	}
);

export default instance;
