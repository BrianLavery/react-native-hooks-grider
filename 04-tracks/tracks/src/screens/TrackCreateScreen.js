import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import Spacer from './../components/Spacer';
import Map from '../components/Map';

const TrackCreateScreen = () => {
	return (
		<SafeAreaView>
			<Spacer>
				<Text h2>Create a Track</Text>
			</Spacer>
			<Spacer>
				<Map />
			</Spacer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
