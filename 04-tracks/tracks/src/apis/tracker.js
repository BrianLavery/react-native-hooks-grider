import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
	baseURL: 'https://b6c0-2405-9800-ba11-8da2-a1e-fc6a-ef42-5168.ngrok.io',
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
