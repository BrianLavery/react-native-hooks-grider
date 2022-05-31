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
	const [subscriber, setSubscriber] = useState(null);

	const startWatching = async () => {
		try {
			const { granted } = await requestForegroundPermissionsAsync();
			if (!granted) {
				throw new Error('Location permission not granted');
			}
			const sub = await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation, // accuracy impacts battery usage - we use high accuracy
					timeInterval: 1000,
					distanceInterval: 10,
				},
				callback
			);
			setSubscriber(sub);
		} catch (error) {
			setErr(error);
		}
	};

	useEffect(() => {
		if (shouldTrack) {
			startWatching();
		} else {
			subscriber.remove();
			setSubscriber(null);
		}
	}, [shouldTrack]);

	return [err]; // We return in an array for convention
};
