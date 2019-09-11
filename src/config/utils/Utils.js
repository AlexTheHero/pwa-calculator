export const calculatePercentage = (number, percentage = 1) => {
	return (number / 100 * percentage)
};

export const removeSignedValue = (value) => {
	if(value[0] === '-'){
		return value.substring(2);
	}
	
	return value;
};