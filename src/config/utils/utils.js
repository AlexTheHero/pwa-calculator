export const ARITHMETIC_SYMBOLS = /([*+/-])/g;

export const calculatePercentage = (number, percentage = 1) => {
	return (number / 100 * percentage)
};

export const removeSignedValue = (value) => {
	if(value[0] === '-'){
		return value.substring(2);
	}
	
	return value;
};

export const calculateValues = (values) => {
	let theValues = values.replace(/\s+/g, '');
	let finalValue = 0;
	let counter = 0;
	
	for(let i = 0; i < theValues.length; i++){
		if(theValues[i].match(ARITHMETIC_SYMBOLS)){
			console.log("TODO!")
		}
	}
	
	return finalValue;
};