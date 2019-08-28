import { ADD_HISTORY_ITEM } from '../action-types/index';

const initState = [];
export const history = (state = initState, action) => {
	switch (action.type) {
		case ADD_HISTORY_ITEM:
			return [ ...state, action.payload ];
		default:
			return state;
	}
};
