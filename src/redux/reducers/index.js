import { combineReducers } from 'redux';
import { currentExpression } from './currentExpression';
import { history } from './history';

const RootReducer = combineReducers({
	currentExpression,
	history
});
export default RootReducer;
