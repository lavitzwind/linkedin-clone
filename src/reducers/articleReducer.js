import { SET_LOADING_STATUS } from "../actions/actionType";

export const initState = {
	loading: false,
};

const articleReducer = (state = initState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default articleReducer;
