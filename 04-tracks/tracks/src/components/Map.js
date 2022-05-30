import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';

import { Context as LocationContext } from '../contexts/LocationContext';

const Map = () => {
	const {
		state: { currentLocation },
	} = useContext(LocationContext);

	if (!currentLocation) {
		return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
	}

	// Map properties we have initialRegion but then we keep updating using the region property start
	return (
		<MapView
			style={styles.map}
			initialRegion={{
				...currentLocation.coords,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}>
			<Circle
				center={currentLocation.coords}
				radius={25}
				strokeColor='rgba(30,60,255,1.0)'
				fillColor='rgba(30,60,255,0.3)'
			/>
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});

export default Map;

// initialLocation = {
//     longitude: -122.0312186,
//     latitude: 37.33233141,
//   };
//   return (
//     <MapView
//       style={styles.map}
//       initialRegion={{
//         ...initialLocation,
//         latitudeDelta: 0.01,
//         longitudeDelta: 0.01,
//       }}
//     >

// region={{
// 	...currentLocation.coords,
// 	latitudeDelta: 0.01,
// 	longitudeDelta: 0.01,
// }}
