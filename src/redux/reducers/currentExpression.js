import { AddOperation, AddNumber, AddHistory } from '../action-types/index';

const initState = [];
export const currentExpression = (state = initState, action) => {
	switch (action.type) {
		case AddOperation:
			return state + action.op;
		case AddNumber: 
			return state + action.num;
		case AddHistory:
			return '';
		default:
			return state;
	}
};
