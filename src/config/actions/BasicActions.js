import {basic} from "../constants/actionType";

export const addValue = (value) => {
	return (dispatch) => dispatch({ type: basic.ADD_VALUE, value});
};

export const addSymbol = (value) => {
	return (dispatch) => dispatch({ type: basic.ADD_SYMBOL, value});
};

export const clearData = () => {
	return (dispatch) => dispatch({ type: basic.CLEAR_DATA})
};