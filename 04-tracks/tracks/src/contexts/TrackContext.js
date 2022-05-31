import createDataContext from './createDataContext';
import trackerApi from '../apis/tracker';

const trackReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_tracks':
			return action.payload; // we assume API is total source of truth so it becomes new state
		default:
			return state;
	}
};

const fetchTracks = (dispatch) => async () => {
	const response = await trackerApi.get('/tracks');
	dispatch({ type: 'fetch_tracks', payload: response.data });
};

const createTrack = (dispatch) => async (name, locations) => {
	await trackerApi.post('/tracks', { name, locations });
};

export const { Context, Provider } = createDataContext(trackReducer, { fetchTracks, createTrack }, []);
