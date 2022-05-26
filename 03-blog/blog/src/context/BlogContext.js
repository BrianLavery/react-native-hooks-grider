import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'get_blogposts':
			return action.payload; // assume this API response is "total source of truth"
		case 'edit_blogpost':
			return state.map((blogPost) => {
				return blogPost.id === action.payload.id ? action.payload : blogPost;
			});
		case 'delete_blogpost':
			return state.filter((blogPost) => blogPost.id !== action.payload);
		default:
			return state;
	}
};

const getBlogPosts = (dispatch) => {
	return async () => {
		const response = await jsonServer.get('/blogposts');

		dispatch({ type: 'get_blogposts', payload: response.data });
	};
};

const addBlogPost = (dispatch) => {
	return async (title, content, callback) => {
		await jsonServer.post('/blogposts', { title, content });

		if (callback) {
			callback();
		}
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: 'delete_blogpost', payload: id });
	};
};

const editBlogPost = (dispatch) => {
	return (id, title, content, callback) => {
		dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
		if (callback) {
			callback();
		}
	};
};

// Third argument is default state
export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
	[]
);
