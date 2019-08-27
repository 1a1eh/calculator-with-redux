import { AddHistory } from '../action-types/index';

const initState = [];
export const history = (state = initState, action) => {
	switch (action.type) {
		case AddHistory:
			return [ ...state, action.payload ];
		default:
			return state;
	}
};
