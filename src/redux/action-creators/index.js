import { ADD, TOGGLE, DELETE } from '../action-types/index';
import cuid from 'cuid';

export const onAddItem = (text) => {
	return {
		type: ADD,
		text,
		id: cuid()
	};
};

export const onToggleItem = (id) => {
	return {
		type: TOGGLE,
		id
	};
};

export const onDeleteItem = (id) => {
	return {
		type: DELETE,
		id
	};
};
