import {basic} from "../constants/actionType";

export default (state = initialState, action) => {
	switch (action.type) {
		case basic.ADD_VALUE:
			// if(action.value === "-"){
			//
			// }
			
			return {
				...state,
				displayValue: state.displayValue !== null ? state.displayValue + action.value.toString() : action.value.toString()
			};
		case basic.ADD_SYMBOL:
			return {...state, displaySymbol: action.value};
		case basic.CLEAR_DATA:
			return {...state, ...initialState};
		default:
			return state;
	}
};

const initialState = {
	displayValue: null,
	displaySymbol: null
};

