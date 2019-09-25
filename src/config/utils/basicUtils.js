export const ARITHMETIC_SYMBOLS = /([-/x+÷*])/g;

export const calculatePercentage = (number = 1, percentage = 1) => {
	return number * percentage / 100;
};

export const removeSignedValue = (value) => {
	if (value[0] === '-') {
		return value.substring(2);
	}
	
	return value;
};

export const resolvePercentageFromStringBasic = (values) => {
	let newValues = [];
	
	for (let i = 0; i < values.length; i++) {
		if (values[i].includes('%')) {
			if (values[i - 1] === '-' || values[i - 1] === '+') {
				if(values[i - 2].includes('%')){
					newValues.push(calculatePercentage(Number(newValues[newValues.length - 2]), Number(values[i].replace('%', ''))).toString());
				}
				else {
					newValues.push(calculatePercentage(Number(values[i - 2]), Number(values[i].replace('%', ''))).toString());
				}
			} else {
				newValues.push(calculatePercentage(Number(values[i].replace('%', ''))).toString());
			}
		} else {
			newValues.push(values[i]);
		}
	}
	
	return newValues;
};

export const resolveMultiplicationFromString = (values) => {
	if (!values.includes('÷') && !values.includes('x')) {
		return values;
	}
	
	let newValues = [];
	let i = 0;
	
	while (i < values.length) {
		if (values[i + 1] === String.fromCharCode(247)) {
			if (values[i + 2].includes('-')) {
				if (values[i + 2].includes('-')) {
					if (newValues.length > 0 && newValues[newValues.length - 1].includes('-')) {
						newValues.pop();
						newValues.push('+');
					} else if (newValues.length > 0 && newValues[newValues.length - 1].includes('+')) {
						newValues.pop();
						newValues.push('-');
					} else {
						newValues.push('-');
					}
				}
				newValues.push((Number(values[i]) / Number(values[i + 3])).toString());
				i += 3;
			} else {
				newValues.push((Number(values[i]) / Number(values[i + 2])).toString());
				i += 2;
			}
		} else if (values[i + 1] === 'x') {
			if (values[i + 2].includes('-') || values[i + 2].includes('+')) {
				if (values[i + 2].includes('-')) {
					if (newValues.length > 0 && newValues[newValues.length - 1].includes('-')) {
						newValues.pop();
						newValues.push('+');
					} else if (newValues.length > 0 && newValues[newValues.length - 1].includes('+')) {
						newValues.pop();
						newValues.push('-');
					} else {
						newValues.push('-');
					}
				}
				
				newValues.push((Number(values[i]) * Number(values[i + 3])).toString());
				i += 3;
			} else {
				newValues.push((Number(values[i]) * Number(values[i + 2])).toString());
				i += 2;
			}
		} else {
			newValues.push(values[i]);
		}
		i++;
	}
	
	return resolveMultiplicationFromString(newValues);
};

export const resolveAdditionFromString = (values) => {
	let sum = values.length > 0 && !isNaN(values[0]) ? Number(values[0]) : 0;
	
	let i = 0;
	while (i < values.length) {
		if (values[i] === '+') {
			sum += Number(values[i + 1]);
		} else if (values[i] === '-') {
			sum -= Number(values[i + 1]);
		}
		i++;
	}
	
	return sum;
};

export const calculateValues = (values) => {
	let theValues = values.replace(/[()]/g, '').trim().split(/\s+/);
	theValues = resolveAdditionFromString(resolveMultiplicationFromString(resolvePercentageFromStringBasic(theValues)));
	
	return theValues;
};