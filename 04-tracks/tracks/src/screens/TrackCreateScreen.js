import React, { useContext, useCallback } from 'react'; // useCallback is designed to get around the useEffect bug
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Spacer from './../components/Spacer';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../contexts/LocationContext';
import useLocation from '../hooks/useLocation';
// import '../_mockLocation';

// We get a prop from withNavigationFocus - because we wrap it
const TrackCreateScreen = ({ isFocused }) => {
	const {
		state: { recording },
		addLocation,
	} = useContext(LocationContext);

	// useCallback allows us to only create a new callback function when something changes
	const callback = useCallback(
		(location) => {
			addLocation(location, recording);
		},
		[recording]
	); // Array here is similar to useEffect

	// Here if we are on the TrackCreateScreen or we are recordingthen use location should be switched on
	const [err] = useLocation(isFocused || recording, callback);

	return (
		<SafeAreaView>
			<Spacer>
				<Text h2>Create a Track</Text>
			</Spacer>
			<Spacer>
				<Map />
			</Spacer>
			<Spacer>{err ? <Text>Please enable location services</Text> : null}</Spacer>

			<TrackForm />
		</SafeAreaView>
	);
};

TrackCreateScreen.navigationOptions = {
	title: 'Add Track',
	tabBarIcon: <FontAwesome name='plus' size={20} color='black' />,
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
