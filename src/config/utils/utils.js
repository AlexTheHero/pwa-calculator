export const ARITHMETIC_SYMBOLS = /([-x+÷])/g;
const parentheses = '(';

export const calculatePercentage = (number, percentage = 1) => {
	return (number / 100 * percentage)
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
			newValues.push(calculatePercentage(Number(values[i - 2]), Number(values[i].replace('%', ''))).toString());
		} else {
			newValues.push(values[i]);
		}
	}
	
	return newValues;
};

export const resolveMultiplicationFromString = (values) => {
	let newValues = [];
	let i = 0;
	
	while (i < values.length) {
		if (values[i + 1] === String.fromCharCode(247)) {
			if (values[i + 2].includes(parentheses)) {
				if (values[i - 1] === '-') {
					if (values[i + 2].includes('-')) {
						newValues.pop();
						newValues.push('+');
						newValues.push(Number(values[i] / Number(values[i + 3].replace(')', ''))).toString());
						i += 1;
					}
				} else {
					if (values[i + 2].includes('-')) {
						newValues.pop();
						newValues.push('-');
						newValues.push(Number(values[i] / Number(values[i + 3].replace(')', ''))).toString());
						i += 1;
					}
				}
			} else {
				newValues.push(Number(values[i] / Number(values[i + 2])).toString());
			}
			
			i += 2;
		} else if (values[i + 1] === 'x') {
			if (values[i + 2].includes(parentheses)) {
				if (values[i - 1] === '-') {
					if (values[i + 2].includes('-')) {
						newValues.pop();
						newValues.push('+');
						newValues.push(Number(values[i] * Number(values[i + 3].replace(')', ''))).toString());
						i += 1;
					}
				} else {
					if (values[i + 2].includes('-')) {
						newValues.pop();
						newValues.push('-');
						newValues.push(Number(values[i] * Number(values[i + 3].replace(')', ''))).toString());
						i += 1;
					}
				}
			} else {
				newValues.push(Number(values[i] * Number(values[i + 2])).toString());
			}
			
			i += 2;
		} else {
			newValues.push(values[i]);
		}
		i++;
	}
	
	if (values.length === newValues.length) {
		return newValues;
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
	let theValues = values.trim().split(/\s+/);
	theValues = resolveAdditionFromString(resolveMultiplicationFromString(resolvePercentageFromString(theValues)));
	
	return theValues;
};