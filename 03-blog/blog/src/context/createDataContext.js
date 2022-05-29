// Some code to automate setting up a context and reducers for all types of data
// This is a reusable function anytime we have to set up context and a provider
import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
	const Context = React.createContext();

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initialState);

		// actions is an object with various functions that will be called with dispatch and return another function
		// So we loop through actions object - call each function with dispatch and then get a function back that we pass into value prop
		const boundActions = {};
		for (let key in actions) {
			boundActions[key] = actions[key](dispatch);
		}

		return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
	};

	return { Context, Provider };
};
