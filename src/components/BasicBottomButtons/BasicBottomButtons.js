import CalculatorButton from "../Buttons/CalculatorButton/CalculatorButton";
import React from "react";
import "./BasicBottomButtons.scss";

const onAddValue = (props, number) => {
	if(number === 0 && props.displayValue === null){
		return;
	}
	
	props.addValue(number);
};

const handleValueStatus = (props) => {
	if(props.displaySymbol === "-"){
		props.addSymbol(null);
		return;
	}
	props.addSymbol("-");
};

const BasicBottomButtons = ({props}) => {
	return(
		<div className="bottomContainer">
			<div className="row">
				<CalculatorButton handleClick={() => props.clearData()} text={"del"}/>
				<CalculatorButton handleClick={() => handleValueStatus(props)} text={"+/-"}/>
				<CalculatorButton handleClick={() => props.addSymbol("%")} text={"%"}/>
				<CalculatorButton handleClick={() => props.addSymbol("/")} text={"/"}/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(props, 7)} text={"7"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 8)} text={"8"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 9)} text={"9"}/>
				<CalculatorButton handleClick={() => props.addSymbol("x")} text={"x"} customStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(props, 4)} text={"4"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 5)} text={"5"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 6)} text={"6"}/>
				<CalculatorButton handleClick={() => props.addSymbol("-")} text={"-"} customStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(props, 1)} text={"1"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 2)} text={"2"}/>
				<CalculatorButton handleClick={() => onAddValue(props, 3)} text={"3"}/>
				<CalculatorButton handleClick={() => props.addSymbol("+")} text={"+"} customStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(props, 0)} text={"0"}/>
				<CalculatorButton isDisabled/>
				<CalculatorButton handleClick={() => props.addValue(".")} text={","}/>
				<CalculatorButton handleClick={() => console.log('ok')} text={"="} customStyle/>
			</div>
		</div>
	)
};

export default BasicBottomButtons;
