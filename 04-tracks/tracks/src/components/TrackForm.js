import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';

import { Context as LocationContext } from '../contexts/LocationContext';
import Spacer from './Spacer';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
	const {
		state: { name, recording, locations },
		startRecording,
		stopRecording,
		changeName,
	} = useContext(LocationContext);

	const [saveTrack] = useSaveTrack();

	return (
		<React.Fragment>
			<Input placeholder='Enter name' onChangeText={changeName} value={name} />
			<Spacer>
				{recording ? (
					<Button title='Stop' onPress={stopRecording} />
				) : (
					<Button title='Start Recording' onPress={startRecording} />
				)}
			</Spacer>
			<Spacer>
				{!recording && locations.length > 0 ? <Button title='Save Recording' onPress={saveTrack} /> : null}
			</Spacer>
		</React.Fragment>
	);
};

export default TrackForm;
