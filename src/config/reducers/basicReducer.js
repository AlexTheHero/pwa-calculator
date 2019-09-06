import {basic} from "../constants/actionType";

export default (state = initialState, action) => {
	switch (action.type) {
		case basic.DISPLAY_VALUE:
			return {
				...state,
				displayValue: state.displayValue !== null ? state.displayValue + action.value.toString() : action.value.toString()
			};
		case basic.CLEAR_DATA:
			return {...state, displayValue: null};
		default:
			return state;
	}
};

const initialState = {
	displayValue: null
};

