import { useContext } from 'react';
import { Context as TrackContext } from '../contexts/TrackContext';
import { Context as LocationContext } from '../contexts/LocationContext';
import { navigate } from '../navigationRef';

// Below is a function that any component can use to save a new track
export default () => {
	const { createTrack } = useContext(TrackContext);
	const {
		state: { locations, name },
		reset,
	} = useContext(LocationContext);

	const saveTrack = async () => {
		await createTrack(name, locations);
		// We modify state to update form
		reset();
		navigate('TrackList');
	};

	return [saveTrack];
};
