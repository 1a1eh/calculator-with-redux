import {ADD} from  '../action-types/index';
 
const initState = [];
export const reducer = (state = initState, action) => {
    switch(action.type) {
        case ADD: return [
            ...state,
            {
                text: action.text,
                id: action.id,
                completed: false
            }
        ]
        default: return state;
    }
};
