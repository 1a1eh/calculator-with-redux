import { ADD, TOGGLE } from '../action-types/index';
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
	}
};