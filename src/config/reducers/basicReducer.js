import {basic} from "../constants/actionType";

const VALUES = {
	DOT: ".",
	SIGNED: "-",
	UNSIGNED: "+",
	SPACE: " ",
	ADD_TO_HISTORY: ""
};

export default (state = initialState, action) => {
	switch (action.type) {
		case basic.ADD_VALUE:
			return {
				...state,
				displayValue: state.displayValue !== null ? state.displayValue + action.value.toString() : action.value.toString()
			};
		
		case basic.MAKE_SIGNED_VALUE:
			if (state.displayValue === null) return {...state};
			let makeSignedValue = "";
			
			if (state.displayValue[0] !== VALUES.SIGNED) {
				makeSignedValue = `${VALUES.SIGNED} ` + state.displayValue;
			} else {
				makeSignedValue = state.displayValue.slice(2);
			}
			return {...state, displayValue: makeSignedValue};
		
		case basic.ADD_SYMBOL:
			return {...state, displaySymbol: action.value};
		
		case basic.DISPLAY_HISTORY:
			VALUES.ADD_TO_HISTORY = '';
			let UPDATED_VALUE = state.displayValue;
			let updatedSymbol = state.displaySymbol;
			
			if(state.displayHistory !== null) {
				VALUES.ADD_TO_HISTORY += state.displayHistory + VALUES.SPACE;
			}
			if(state.displaySymbol !== null && state.displayHistory !== null) {
				if(UPDATED_VALUE[0] === VALUES.SIGNED && state.displaySymbol === VALUES.SIGNED){
					updatedSymbol = VALUES.UNSIGNED;
					UPDATED_VALUE = state.displayValue.substring(2);
				}
				else if(UPDATED_VALUE[0] === VALUES.SIGNED && state.displaySymbol === VALUES.UNSIGNED){
					updatedSymbol = "";
				}
				
				VALUES.ADD_TO_HISTORY += updatedSymbol + VALUES.SPACE;
			}
			if(state.displaySymbol === null && state.displayHistory !== null){
				VALUES.ADD_TO_HISTORY = "";
			}
			
			VALUES.ADD_TO_HISTORY += UPDATED_VALUE + VALUES.SPACE;
			
			return {...state, displayHistory: VALUES.ADD_TO_HISTORY};
			
		case basic.ADD_HISTORY:
			VALUES.ADD_TO_HISTORY = '';
			if(state.displayHistory !== null){
				VALUES.ADD_TO_HISTORY = state.displayHistory + VALUES.SPACE;
			}
			if(state.displaySymbol !== null){
				VALUES.ADD_TO_HISTORY += state.displaySymbol + VALUES.SPACE;
			}
			
			VALUES.ADD_TO_HISTORY += action.value;
			
			return {...state, displayHistory: VALUES.ADD_TO_HISTORY};
		
		case basic.CLEAR_DISPLAY_VALUE:
			let CLEAR_SELECTED = "";
			if(action.value === 'displayValue'){
				CLEAR_SELECTED = {displayValue: null}
			}
			else if(action.value === 'displaySymbol'){
				CLEAR_SELECTED = {displaySymbol: null}
			}
			else{
				CLEAR_SELECTED = {displayValue: null, displaySymbol: null}
			}
			
			return {...state, ...CLEAR_SELECTED};
		
		case basic.CLEAR_DATA:
			return {...state, ...initialState};
			
		default:
			return state;
	}
};

const initialState = {
	displayValue: null,
	displaySymbol: null,
	displayHistory: null
};

