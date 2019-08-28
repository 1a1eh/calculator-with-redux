import { combineReducers } from 'redux';
import { expressionEdit } from './expressionEdit';
import { history } from './history';

export const RootReduer = combineReducers({
	expressionEdit,
	history
});
