import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Text } from 'react-native-elements';

import { Context as TrackContext } from '../contexts/TrackContext';
import Spacer from './../components/Spacer';

const TrackDetailScreen = ({ navigation }) => {
	const { state } = useContext(TrackContext);
	const _id = navigation.getParam('_id');
	const track = state.find((trak) => trak._id === _id);
	const initialCoords = track.locations[0].coords;

	return (
		<React.Fragment>
			<Spacer>
				<Text h2>{track.name}</Text>
			</Spacer>
			<MapView
				style={styles.map}
				initialRegion={{
					longitudeDelta: 0.01,
					latitudeDelta: 0.01,
					...initialCoords,
				}}>
				<Polyline coordinates={track.locations.map((loc) => loc.coords)} />
			</MapView>
		</React.Fragment>
	);
};

TrackDetailScreen.navigationOptions = () => {
	return {
		title: 'Track detail',
	};
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});

export default TrackDetailScreen;

// <MapView
// style={styles.map}
// initialRegion={{
// 	...currentLocation.coords,
// 	latitudeDelta: 0.01,
// 	longitudeDelta: 0.01,
// }}>
// <Circle
// 	center={currentLocation.coords}
// 	radius={35}
// 	strokeColor='rgba(15,40,255,1.0)'
// 	fillColor='rgba(15,40,255,0.3)'
// />
// <Polyline coordinates={locations.map((loc) => loc.coords)} />
// </MapView>
// );
// };

// const styles = StyleSheet.create({
// map: {
// height: 300,
// },
// });
