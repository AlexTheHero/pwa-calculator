import CalculatorButton from "../Buttons/CalculatorButton/CalculatorButton";
import React from "react";
import "./_BasicBottomButtons.scss";
import {ARITHMETIC_SYMBOLS, calculatePercentage, calculateValues, removeSignedValue} from "../../config/utils/utils";
import {GLOBAL_ICONS} from "../../config/constants/globals";

const onAddValue = (props, number) => {
	if (props.displayValue && props.displayValue.length > 10) {
		return;
	}
	if (number === 0 && props.displayValue === "0") {
		return;
	} else if (number === 0 && props.displayHistory === null && props.displayValue !== null) {
		return;
	} else if (number !== 0 && props.displayValue === "0" && number !== ".") {
		props.clearDisplayValue("displayValue");
		props.addValue(number);
		return;
	}
	
	if (number === ".") {
		if (props.displayValue === null) return;
		if (props.displayValue.includes(".")) return;
	}
	
	props.addValue(number);
};

const onAddSymbol = (props, symbol) => {
	if (props.displayValue === null) return;
	if (props.displaySymbol !== null && props.displayHistory !== null) {
		props.makeHistory();
		props.clearDisplayValue();
	} else {
		props.makeHistory();
		props.clearDisplayValue();
	}
	
	props.addSymbol(symbol);
};

const onEqual = (props) => {
	if (props.displayHistory === null || props.displaySymbol === null) return;
	if (!props.displayHistory.match(ARITHMETIC_SYMBOLS) && props.displayValue === null) return;
	
	const valuesToProcess = props.displayValue !== null ? props.displayHistory + props.displaySymbol + ' ' + props.displayValue : props.displayHistory;
	let calculatedValue = calculateValues(valuesToProcess);
	
	if (props.displayValue !== null) {
		props.addHistory(`${props.displayValue} = ${calculatedValue}`);
	} else {
		props.clearDisplayValue();
		props.addHistory(` = ${calculatedValue}`);
	}
	
	props.clearDisplayValue();
};

const onPercent = async (props) => {
	if (props.displaySymbol !== null && props.displayHistory === null) {
		return;
	}
	if (props.displayValue === null) {
		return;
	}
	if (props.displaySymbol === null) {
		let newValue = removeSignedValue(props.displayValue);
		let operatedPercent = calculatePercentage(Number(newValue));
		props.clearData();
		props.addHistory(`${newValue}% = ${operatedPercent}`);
		
		return;
	}
	
	props.addHistory(`${props.displayValue}%`);
	props.clearDisplayValue('displayValue');
};

const BasicBottomButtons = ({props}) => {
	// eslint-disable-next-line no-mixed-operators
	const isSigned = !!props.displayValue && props.displayValue.includes("-") && GLOBAL_ICONS.plusSquare || GLOBAL_ICONS.minusSquare;
	
	return (
		<div className="bottomContainer">
			<div className="row">
				<CalculatorButton handleClick={() => props.clearData()} text={GLOBAL_ICONS.delete}/>
				<CalculatorButton handleClick={() => props.makeSigned()} text={isSigned}/>
				<CalculatorButton handleClick={() => onPercent(props)} text={GLOBAL_ICONS.percentage}/>
				<CalculatorButton handleClick={() => onAddSymbol(props, "/")} text={GLOBAL_ICONS.divide}/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(props, 7)} text={"7"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 8)} text={"8"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 9)} text={"9"}/>
				<CalculatorButton handleClick={() => onAddSymbol(props, "x")} text={GLOBAL_ICONS.multiply} customStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(props, 4)} text={"4"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 5)} text={"5"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 6)} text={"6"}/>
				<CalculatorButton handleClick={() => onAddSymbol(props, "-")} text={GLOBAL_ICONS.minus} customStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(props, 1)} text={"1"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 2)} text={"2"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 3)} text={"3"}/>
				<CalculatorButton handleClick={() => onAddSymbol(props, "+")} text={GLOBAL_ICONS.plus} customStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(props, 0)} text={"0"}/>
				<CalculatorButton isDisabled/>
				<CalculatorButton handleClick={() => onAddValue(props, ".")} text={","}/>
				<CalculatorButton handleClick={() => onEqual(props)} text={GLOBAL_ICONS.equal} customStyle/>
			</div>
		</div>
	)
};

export default BasicBottomButtons;
