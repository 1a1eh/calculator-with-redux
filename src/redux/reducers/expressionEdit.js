import { ADD_NUMBER, ADD_OPERATOR, ADD_HISTORY_ITEM } from '../action-types/index';

const initState = '';
export const expressionEdit = (state = initState, action) => {
	switch (action.type) {
		case ADD_NUMBER:
			return state + action.num;
		case ADD_OPERATOR:
			return state + action.op;
		case ADD_HISTORY_ITEM:
			return initState;
		default:
			return state;
	}
};
