import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
	// requestPermissionsAsync,
	requestForegroundPermissionsAsync,
	watchPositionAsync,
	Accuracy,
} from 'expo-location';
// import * as Permissions from 'expo-permissions'; // This is another option
// const location = await Permissions.askAsync(Permissions.LOCATION);

import Spacer from './../components/Spacer';
import Map from '../components/Map';
import { Context as LocationContext } from '../contexts/LocationContext';
import '../_mockLocation';

const TrackCreateScreen = () => {
	const { addLocation } = useContext(LocationContext);
	const [err, setErr] = useState(null);

	const startWatching = async () => {
		try {
			const { granted } = await requestForegroundPermissionsAsync();
			if (!granted) {
				throw new Error('Location permission not granted');
			}
			await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation, // accuracy impacts battery usage - we use high accuracy
					timeInterval: 1000,
					distanceInterval: 10,
				},
				(location) => {
					addLocation(location);
				}
			);
		} catch (error) {
			setErr(error);
		}
	};

	useEffect(() => {
		startWatching();
	}, []);

	return (
		<SafeAreaView>
			<Spacer>
				<Text h2>Create a Track</Text>
			</Spacer>
			<Spacer>
				<Map />
			</Spacer>
			{err ? <Text>Please enable location services</Text> : null}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

// const startWatching = async () => {
//
// 	if (location.status !== 'granted') {
// 		setErr('error');
// 	}
// };
