import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';

import Spacer from './../components/Spacer';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../contexts/LocationContext';
import useLocation from '../hooks/useLocation';
import '../_mockLocation';

// We get a prop from withNavigationFocus - because we wrap it
const TrackCreateScreen = ({ isFocused }) => {
	const { state, addLocation } = useContext(LocationContext);
	const [err] = useLocation(isFocused, (location) => {
		addLocation(location, state.recording);
	});

	return (
		<SafeAreaView>
			<Spacer>
				<Text h2>Create a Track</Text>
			</Spacer>
			<Spacer>
				<Map />
			</Spacer>
			<Spacer>{err ? <Text>Please enable location services</Text> : null}</Spacer>
			<Spacer>
				<TrackForm />
			</Spacer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
