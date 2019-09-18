export const ARITHMETIC_SYMBOLS = /([-x+÷])/g;
const parentheses = '(';

export const calculatePercentage = (number, percentage = 1) => {
	let value = number / 100 * percentage;
	
	if (isNaN(number) || isNaN(percentage)) {
		return false;
	}
	if (isNaN(value)) {
		return 0;
	}
	
	return value;
};

export const removeSignedValue = (value) => {
	if (value[0] === '-') {
		return value.substring(2);
	}
	
	return value;
};

export const resolvePercentageFromString = (values) => {
	let newValues = [];
	
	for (let i = 0; i < values.length; i++) {
		if (values[i].includes('%')) {
			if (i > 3 && (values[i - 2].includes('%') || values[i - 3].includes('%'))) {
				if (values[i - 3].includes('%')) {
					newValues.push(calculatePercentage(Number(newValues[newValues.length - 3]), Number(values[i].replace('%)', ''))).toString())
				} else {
					newValues.push(calculatePercentage(Number(newValues[newValues.length - 2]), Number(values[i].replace('%', ''))).toString())
				}
			} else {
				if (values[i - 1].includes('(')) {
					newValues.push(calculatePercentage(Number(values[i - 3]), Number(values[i].replace('%)', ''))).toString());
				} else {
					newValues.push(calculatePercentage(Number(values[i - 2]), Number(values[i].replace('%', ''))).toString());
				}
			}
		} else {
			newValues.push(values[i]);
		}
	}
	
	return newValues;
};

export const resolveMultiplicationFromString = (values) => {
	console.log(values)
	if (!values.includes('÷') && !values.includes('x')) {
		return values;
	}
	
	let newValues = [];
	let i = 0;
	
	while (i < values.length) {
		if (values[i + 1] === String.fromCharCode(247)) {
			console.log('ok');
		} else if (values[i + 1] === 'x') {
			if (values[i + 2].includes('-')) {
				newValues.push('-');
				newValues.push((Number(values[i]) * Number(values[i + 3].replace(')', ''))).toString());
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
	console.log(values)
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
	let theValues = values.trim().split(/\s+/);
	theValues = resolveAdditionFromString(resolveMultiplicationFromString(resolvePercentageFromString(theValues)));
	
	return theValues;
};