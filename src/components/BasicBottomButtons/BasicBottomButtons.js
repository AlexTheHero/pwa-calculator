import CalculatorButton from "../Buttons/CalculatorButton/CalculatorButton";
import React from "react";
import "./_BasicBottomButtons.scss";
import {calculatePercentage, removeSignedValue} from "../../config/utils/Utils";

const onAddValue = (props, number) => {
	if(number === 0 && props.displayValue === "0"){
		return;
	}
	else if(number === 0 && props.displayHistory === null && props.displayValue !== null){
		return;
	}
	else if(number !== 0 && props.displayValue === "0" && number !== "."){
		props.clearDisplayValue("displayValue");
		props.addValue(number);
		return;
	}
	
	if(number === "."){
		if(props.displayValue === null) return;
		if(props.displayValue.includes(".")) return;
	}
	
	props.addValue(number);
};

const onAddSymbol = (props, symbol) => {
	if(props.displaySymbol !== null && props.displayValue !== null){
		props.makeHistory();
		props.clearDisplayValue();
		props.addSymbol(symbol);
		return;
	}
	
	if(props.displayValue !== null) {
		props.makeHistory();
		props.clearDisplayValue();
	}
	
	if(props.displayHistory !== null && props.displaySymbol === null){
		props.clearData();
	}
	
	props.addSymbol(symbol);
};

const onEqual = (props) => {
	props.clearDisplayValue();
};

const onPercent = async (props) => {
	if(props.displaySymbol !== null && props.displayHistory === null){
		return;
	}
	if(props.displayValue === null){
		return;
	}
	if(props.displaySymbol === null){
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
	return(
		<div className="bottomContainer">
			<div className="row">
				<CalculatorButton handleClick={() => props.clearData()} text={"del"}/>
				<CalculatorButton handleClick={() => props.makeSigned()} text={"+/-"}/>
				<CalculatorButton handleClick={() => onPercent(props)} text={"%"}/>
				<CalculatorButton handleClick={() => onAddSymbol(props, "/")} text={"/"}/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(props, 7)} text={"7"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 8)} text={"8"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 9)} text={"9"}/>
				<CalculatorButton handleClick={() => onAddSymbol(props,"x")} text={"x"} customStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(props, 4)} text={"4"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 5)} text={"5"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 6)} text={"6"}/>
				<CalculatorButton handleClick={() => onAddSymbol(props,"-")} text={"-"} customStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(props, 1)} text={"1"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 2)} text={"2"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 3)} text={"3"}/>
				<CalculatorButton handleClick={() => onAddSymbol(props, "+")} text={"+"} customStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(props, 0)} text={"0"}/>
				<CalculatorButton isDisabled/>
				<CalculatorButton handleClick={() => onAddValue(props,".")} text={","}/>
				<CalculatorButton handleClick={() => onEqual(props)} text={"="} customStyle/>
			</div>
		</div>
	)
};

export default BasicBottomButtons;
