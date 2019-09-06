import {basic} from "../constants/actionType";

export const addValue = (value) => {
	return (dispatch) => dispatch({ type: basic.DISPLAY_VALUE, value});
};

export const clearData = () => {
	return (dispatch) => dispatch({ type: basic.CLEAR_DATA})
};