import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';

import { Context as LocationContext } from '../contexts/LocationContext';

const Map = () => {
	const {
		state: { currentLocation, locations },
	} = useContext(LocationContext);

	// console.log(locations);

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
				radius={35}
				strokeColor='rgba(15,40,255,1.0)'
				fillColor='rgba(15,40,255,0.3)'
			/>
			<Polyline coordinates={locations.map((loc) => loc.coords)} />
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});

export default Map;
