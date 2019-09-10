import {basic} from "../constants/actionType";

const VALUES = {
	DOT: ".",
	SIGNED: "-"
};

export default (state = initialState, action) => {
	switch (action.type) {
		case basic.ADD_VALUE:
			return {
				...state,
				displayValue: state.displayValue !== null ? state.displayValue + action.value.toString() : action.value.toString()
			};
		case basic.MAKE_SIGNED_VALUE:
			if(state.displayValue === null) return {...state};
			let makeSignedValue = "";
			
			if(state.displayValue[0] !== VALUES.SIGNED){
				makeSignedValue = `${VALUES.SIGNED} ` + state.displayValue;
			}
			else {
				makeSignedValue = state.displayValue.slice(2);
			}
			return {...state, displayValue: makeSignedValue};
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

