import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
	let points = [];
	for (let i = 0; i < 20; i++) {
		if (i % 2 === 0) {
			points.push({
				latitude: 13.728500803444328 + i * 0.0001,
				longitude: 100.57101687254492 + i * 0.0001,
			});
		} else {
			points.push({
				latitude: points[i - 1].latitude + 0.0002,
				longitude: 100.57101687254492 + i * 0.0001,
			});
		}
	}

	return (
		<MapView
			style={styles.map}
			initialRegion={{
				latitude: 13.728500803444328,
				longitude: 100.57101687254492,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}>
			<Polyline coordinates={points} />
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});

export default Map;
