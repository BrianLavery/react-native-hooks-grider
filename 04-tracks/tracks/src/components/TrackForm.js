import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../contexts/LocationContext';

const TrackForm = () => {
	const {
		state: { name, recording, locations },
		startRecording,
		stopRecording,
		changeName,
	} = useContext(LocationContext);

	return (
		<React.Fragment>
			<Input placeholder='Enter name' onChangeText={changeName} value={name} />
			{recording ? (
				<Button title='Stop' onPress={stopRecording} />
			) : (
				<Button title='Start Recording' onPress={startRecording} />
			)}
		</React.Fragment>
	);
};

export default TrackForm;
