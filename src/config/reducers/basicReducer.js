import {basic} from "../constants/actionType";

const VALUES = {
	DOT: ".",
	SIGNED: "-",
	UNSIGNED: "+",
	MULTIPLY: 'x',
	DIVIDE: String.fromCharCode(247),
	SPACE: " ",
	ADD_TO_HISTORY: "",
	UPDATED_SYMBOL: "",
	UPDATED_VALUE: "",
};

export default (state = initialState, action) => {
	switch (action.type) {
		case basic.ADD_VALUE:
			VALUES.UPDATED_VALUE = state.displayValue;
			
			if (VALUES.UPDATED_VALUE !== null && VALUES.UPDATED_VALUE.includes(')')) {
				VALUES.UPDATED_VALUE = VALUES.UPDATED_VALUE.replace(')', `${action.value.toString()})`);
			} else if (VALUES.UPDATED_VALUE !== null) {
				VALUES.UPDATED_VALUE = VALUES.UPDATED_VALUE + action.value.toString();
			} else {
				VALUES.UPDATED_VALUE = action.value.toString();
			}
			
			return {
				...state,
				displayValue: VALUES.UPDATED_VALUE
			};
		
		case basic.MAKE_SIGNED_VALUE:
			if (state.displayValue === null) return {...state};
			let makeSignedValue = "";
			let DISPLAY_VALUE = state.displayValue;
			let DISPLAY_SYMBOL = state.displaySymbol;
			let CHECK_DISPLAYED_VALUE = DISPLAY_VALUE[0] === '(' || DISPLAY_VALUE[0] === '-';
			
			if (!CHECK_DISPLAYED_VALUE) {
				if (DISPLAY_SYMBOL === VALUES.MULTIPLY || DISPLAY_SYMBOL === VALUES.DIVIDE) {
					makeSignedValue = `(${VALUES.SIGNED} ` + state.displayValue + ')';
				} else {
					makeSignedValue = `${VALUES.SIGNED} ` + state.displayValue;
				}
			} else {
				if (DISPLAY_SYMBOL === VALUES.MULTIPLY || DISPLAY_SYMBOL === VALUES.DIVIDE) {
					makeSignedValue = state.displayValue.slice(3, -1);
				} else {
					makeSignedValue = state.displayValue.slice(2);
				}
			}
			
			return {...state, displayValue: makeSignedValue};
		
		case basic.ADD_SYMBOL:
			return {...state, displaySymbol: action.value};
		
		case basic.DISPLAY_HISTORY:
			VALUES.ADD_TO_HISTORY = '';
			VALUES.UPDATED_SYMBOL = state.displaySymbol;
			VALUES.UPDATED_VALUE = state.displayValue;
			
			if (state.displayHistory !== null) {
				VALUES.ADD_TO_HISTORY += state.displayHistory + VALUES.SPACE;
			}
			if (state.displaySymbol !== null && state.displayHistory !== null) {
				if (VALUES.UPDATED_VALUE[0] === VALUES.SIGNED && state.displaySymbol === VALUES.SIGNED) {
					VALUES.UPDATED_SYMBOL = VALUES.UNSIGNED;
					VALUES.UPDATED_VALUE = state.displayValue.substring(2);
				} else if (VALUES.UPDATED_VALUE[0] === VALUES.SIGNED && state.displaySymbol === VALUES.UNSIGNED) {
					VALUES.UPDATED_SYMBOL = "";
				}
				
				VALUES.ADD_TO_HISTORY += VALUES.UPDATED_SYMBOL + VALUES.SPACE;
			}
			if (state.displaySymbol === null && state.displayHistory !== null) {
				VALUES.ADD_TO_HISTORY = "";
			}
			
			VALUES.ADD_TO_HISTORY += VALUES.UPDATED_VALUE + VALUES.SPACE;
			
			return {...state, displayHistory: VALUES.ADD_TO_HISTORY};
		
		case basic.ADD_HISTORY:
			VALUES.ADD_TO_HISTORY = '';
			VALUES.UPDATED_SYMBOL = state.displaySymbol;
			VALUES.UPDATED_VALUE = action.value;
			
			if (state.displayHistory !== null) {
				VALUES.ADD_TO_HISTORY = state.displayHistory + VALUES.SPACE;
			}
			if (state.displaySymbol !== null) {
				if (VALUES.UPDATED_VALUE[0] === VALUES.SIGNED && state.displaySymbol === VALUES.SIGNED) {
					VALUES.UPDATED_SYMBOL = VALUES.UNSIGNED;
					VALUES.UPDATED_VALUE = action.value.substring(2);
				} else if (VALUES.UPDATED_VALUE[0] === VALUES.SIGNED && state.displaySymbol === VALUES.UNSIGNED) {
					VALUES.UPDATED_SYMBOL = "";
				}
				
				VALUES.ADD_TO_HISTORY += VALUES.UPDATED_SYMBOL + VALUES.SPACE;
			}
			
			VALUES.ADD_TO_HISTORY += VALUES.UPDATED_VALUE;
			
			return {...state, displayHistory: VALUES.ADD_TO_HISTORY};
		
		case basic.STEP_BACKWARD:
			VALUES.UPDATED_VALUE = state.displayValue;
			
			if (VALUES.UPDATED_VALUE !== null && VALUES.UPDATED_VALUE.length > 1) {
				if (VALUES.UPDATED_VALUE.length > 2 && VALUES.UPDATED_VALUE.includes(VALUES.SIGNED)) {
					VALUES.UPDATED_VALUE = VALUES.UPDATED_VALUE.slice(3, -1);
				} else {
					VALUES.UPDATED_VALUE = VALUES.UPDATED_VALUE.slice(0, -1);
				}
			} else {
				VALUES.UPDATED_VALUE = null;
			}
			
			return {...state, displayValue: VALUES.UPDATED_VALUE};
		
		case basic.CLEAR_DISPLAY_VALUE:
			let CLEAR_SELECTED = "";
			
			if (action.value === 'displayValue') {
				CLEAR_SELECTED = {displayValue: null}
			} else if (action.value === 'displaySymbol') {
				CLEAR_SELECTED = {displaySymbol: null}
			} else if (action.value === 'displayHistory') {
				CLEAR_SELECTED = {displayHistory: null}
			} else {
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

