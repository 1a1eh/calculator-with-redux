import { ADD, TOGGLE } from '../action-types/index';
import ucid from 'ucid';

export const onAddItem = (text) => {
	return {
		type: ADD,
		text,
		id: ucid
	};
};

export const onToggle = (id) => {
	
};