import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
	return {
		timestamp: 1000000000,
		coords: {
			speed: 0,
			heading: 0,
			accuracy: 5,
			altitudeAccuracy: 5,
			altitude: 5,
			longitude: 100.57101687254492 + increment * tenMetersWithDegrees,
			latitude: 13.728500803444328 + increment * tenMetersWithDegrees,
		},
	};
};

let counter = 0;

setInterval(() => {
	Location.EventEmitter.emit('Expo.locationChanged', {
		watchId: Location._getCurrentWatchId(),
		location: getLocation(counter),
	});
	counter++;
}, 1000);
