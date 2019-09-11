export const calculatePercentage = (number, percentage = 1) => {
	return (number / 100 * percentage)
};

export const removeSignedValue = (value) => {
	if(value.substring(1) === '-'){
		return value.slice(2);
	}
	
	return value;
};