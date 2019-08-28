import { AddOperation, AddNumber, AddHistory } from '../action-types/index';

export const numToExpression = (num) => {
	return {
		type: AddNumber,
		num
	};
};

export const opToExpression = (op) => {
	return {
		type: AddOperation,
		op
	};
};

export const addHistory = (expression) => {
	return {
		type: AddHistory,
		payload: {
			expression,
			result: eval(expression.replace(/=\s*$/, ''))
		}
	};
};
