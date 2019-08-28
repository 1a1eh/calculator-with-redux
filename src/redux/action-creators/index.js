import { ADD_HISTORY_ITEM, ADD_OPERATOR, ADD_NUMBER } from '../action-types/index';

export const opToExpression = (op) => {
	return {
		type: ADD_OPERATOR,
		op
	};
};

export const numberToExpression = (num) => {
	return {
		type: ADD_NUMBER,
		num
	};
};

export const addHistoryItem = (expression) => {
    console.log(expression)
	return {
		type: ADD_HISTORY_ITEM,
		payload: {
			expression,
			result: eval(expression)
		}
	};
};
