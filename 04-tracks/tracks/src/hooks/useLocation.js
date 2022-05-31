// This is a custom hook
import { useState, useEffect } from 'react';
import {
	// requestPermissionsAsync,
	requestForegroundPermissionsAsync,
	watchPositionAsync,
	Accuracy,
} from 'expo-location';
// import * as Permissions from 'expo-permissions'; // This is another option
// const location = await Permissions.askAsync(Permissions.LOCATION);

export default (shouldTrack, callback) => {
	const [err, setErr] = useState(null);

	useEffect(() => {
		let subscriber;

		const startWatching = async () => {
			try {
				const { granted } = await requestForegroundPermissionsAsync();
				if (!granted) {
					throw new Error('Location permission not granted');
				}
				subcriber = await watchPositionAsync(
					{
						accuracy: Accuracy.BestForNavigation, // accuracy impacts battery usage - we use high accuracy
						timeInterval: 1000,
						distanceInterval: 10,
					},
					callback
				);
			} catch (error) {
				setErr(error);
			}
		};

		if (shouldTrack) {
			startWatching();
		} else {
			if (subscriber) {
				subscriber.remove();
			}
			subscriber = null;
		}

		// This is our cleanup function as we call useEffect multiple times
		return () => {
			if (subscriber) {
				subscriber.remove();
			}
		};
	}, [shouldTrack, callback]);

	return [err]; // We return in an array for convention
};
