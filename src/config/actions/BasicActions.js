import {basic} from "../constants/actionType";

export const addValue = (value) => {
	return (dispatch) => dispatch({type: basic.ADD_VALUE, value});
};

export const clearDisplayValue = (value = "all") => {
	return (dispatch) => dispatch({type: basic.CLEAR_DISPLAY_VALUE, value});
};

export const addSymbol = (value) => {
	return (dispatch) => dispatch({type: basic.ADD_SYMBOL, value});
};

export const makeSigned = () => {
	return (dispatch) => dispatch({type: basic.MAKE_SIGNED_VALUE});
};

export const clearData = () => {
	return (dispatch) => dispatch({type: basic.CLEAR_DATA})
};

export const makeHistory = () => {
	return (dispatch) => dispatch({type: basic.DISPLAY_HISTORY})
};

export const addHistory = (value) => {
	return (dispatch) => dispatch({type: basic.ADD_HISTORY, value})
};