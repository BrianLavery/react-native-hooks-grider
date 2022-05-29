// We have this file so that we can navigate even when we are outside of Components
import { NavigationActions } from 'react-navigation';

let navigator;

const setNavigator = (nav) => {
	navigator = nav;
};

const navigate = (routeName, params) => {
	navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		})
	);
};

export { setNavigator, navigate };
