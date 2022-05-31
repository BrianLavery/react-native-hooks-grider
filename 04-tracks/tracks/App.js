import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { Provider as AuthProvider } from './src/contexts/AuthContext';
import { Provider as LocationProvider } from './src/contexts/LocationContext';
import { Provider as TrackProvider } from './src/contexts/TrackContext';
import { setNavigator } from './src/navigationRef';

const trackListFlow = createStackNavigator({
	TrackList: TrackListScreen,
	TrackDetail: TrackDetailScreen,
});

trackListFlow.navigationOptions = {
	title: 'Tracks',
	tabBarIcon: <FontAwesome5 name='route' size={20} color='black' />,
};

const switchNavigator = createSwitchNavigator({
	ResolveAuth: ResolveAuthScreen,
	// Use lower case naming here to indicate it refers to another navigator
	loginFlow: createStackNavigator({
		Signup: SignupScreen,
		Signin: SigninScreen,
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow,
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen,
	}),
});

const App = createAppContainer(switchNavigator);

export default () => {
	return (
		<TrackProvider>
			<LocationProvider>
				<AuthProvider>
					<App
						ref={(navigator) => {
							setNavigator(navigator);
						}}
					/>
				</AuthProvider>
			</LocationProvider>
		</TrackProvider>
	);
};
