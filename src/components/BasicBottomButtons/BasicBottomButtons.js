import CalculatorButton from "../Buttons/CalculatorButton/CalculatorButton";
import React from "react";
import "./_BasicBottomButtons.scss";
import {GLOBAL_ICONS} from "../../config/constants/globals";

const BasicBottomButtons = ({props, onPercent, onAddSymbol, onAddValue, onEqual}) => {
	// eslint-disable-next-line no-mixed-operators
	const isSigned = !!props.displayValue && props.displayValue.includes("-") && GLOBAL_ICONS.plusSquare || GLOBAL_ICONS.minusSquare;
	
	return (
		<div className="bottomContainer">
			<div className="row">
				<CalculatorButton handleClick={() => props.clearData()} text={GLOBAL_ICONS.delete} noTextStyle/>
				<CalculatorButton handleClick={() => props.makeSigned()} text={isSigned} noTextStyle/>
				<CalculatorButton handleClick={() => onPercent()} text={GLOBAL_ICONS.percentage} noTextStyle/>
				<CalculatorButton handleClick={() => onAddSymbol(String.fromCharCode(247))} text={GLOBAL_ICONS.divide}
				                  noTextStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(7)} text={"7"}/>
				<CalculatorButton handleClick={() => onAddValue(8)} text={"8"}/>
				<CalculatorButton handleClick={() => onAddValue(9)} text={"9"}/>
				<CalculatorButton handleClick={() => onAddSymbol("x")} text={GLOBAL_ICONS.multiply} customStyle
				                  noTextStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(4)} text={"4"}/>
				<CalculatorButton handleClick={() => onAddValue(5)} text={"5"}/>
				<CalculatorButton handleClick={() => onAddValue(6)} text={"6"}/>
				<CalculatorButton handleClick={() => onAddSymbol("-")} text={GLOBAL_ICONS.minus} customStyle
				                  noTextStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(1)} text={"1"}/>
				<CalculatorButton handleClick={() => onAddValue(2)} text={"2"}/>
				<CalculatorButton handleClick={() => onAddValue(3)} text={"3"}/>
				<CalculatorButton handleClick={() => onAddSymbol("+")} text={GLOBAL_ICONS.plus} customStyle noTextStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(0)} text={"0"}/>
				<CalculatorButton isDisabled/>
				<CalculatorButton handleClick={() => onAddValue(".")} text={","}/>
				<CalculatorButton handleClick={() => onEqual()} text={GLOBAL_ICONS.equal} customStyle noTextStyle/>
			</div>
		</div>
	)
};

export default BasicBottomButtons;
