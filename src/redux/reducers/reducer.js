import { ADD, TOGGLE } from '../action-types/index';

const initState = [];
export const reducer = (state = initState, action) => {
	switch (action.type) {
		case ADD:
			return [
				...state,
				{
					text: action.text,
					id: action.id,
					completed: false
				}
			];
		case TOGGLE:
			return state.map((item) => {
				if (item.id === action.id) {
					return {
						...item,
						completed: !action.completed
					};
				}
				return item;
			});
		default:
			return state;
	}
};
