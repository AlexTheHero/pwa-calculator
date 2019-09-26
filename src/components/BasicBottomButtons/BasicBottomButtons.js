import CalculatorButton from "../Buttons/CalculatorButton/CalculatorButton";
import React from "react";
import "./_BasicBottomButtons.scss";
import {GLOBAL_ICONS} from "../../config/constants/globals";

const BasicBottomButtons = ({props, onPercent, onAddSymbol, onAddValue, onEqual, themeColor}) => {
	// eslint-disable-next-line no-mixed-operators
	const isSigned = !!props.displayValue && props.displayValue.includes("-") && GLOBAL_ICONS.plusSquare || GLOBAL_ICONS.minusSquare;
	
	return (
		<div className="bottomContainer">
			<div className="row">
				<CalculatorButton handleClick={() => props.clearData()} text={GLOBAL_ICONS.delete} noTextStyle deleteColor
				                  themeColor={themeColor}/>
				<CalculatorButton handleClick={() => props.makeSigned()} text={isSigned} noTextStyle
				                  themeColor={themeColor}/>
				<CalculatorButton handleClick={() => onPercent()} text={GLOBAL_ICONS.percentage} noTextStyle
				                  themeColor={themeColor}/>
				<CalculatorButton handleClick={() => onAddSymbol(String.fromCharCode(247))} text={GLOBAL_ICONS.divide}
				                  themeColor={themeColor} noTextStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(7)} text={"7"} themeColor={themeColor}/>
				<CalculatorButton handleClick={() => onAddValue(8)} text={"8"} themeColor={themeColor}/>
				<CalculatorButton handleClick={() => onAddValue(9)} text={"9"} themeColor={themeColor}/>
				<CalculatorButton handleClick={() => onAddSymbol("x")} text={GLOBAL_ICONS.multiply} themeColor={themeColor}
				                  customStyle noTextStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(4)} text={"4"} themeColor={themeColor}/>
				<CalculatorButton handleClick={() => onAddValue(5)} text={"5"} themeColor={themeColor}/>
				<CalculatorButton handleClick={() => onAddValue(6)} text={"6"} themeColor={themeColor}/>
				<CalculatorButton handleClick={() => onAddSymbol("-")} text={GLOBAL_ICONS.minus} themeColor={themeColor}
				                  customStyle noTextStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(1)} text={"1"} themeColor={themeColor}/>
				<CalculatorButton handleClick={() => onAddValue(2)} text={"2"} themeColor={themeColor}/>
				<CalculatorButton handleClick={() => onAddValue(3)} text={"3"} themeColor={themeColor}/>
				<CalculatorButton handleClick={() => onAddSymbol("+")} text={GLOBAL_ICONS.plus} themeColor={themeColor}
				                  customStyle noTextStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => onAddValue(0)} text={"0"} themeColor={themeColor}/>
				<CalculatorButton isDisabled/>
				<CalculatorButton handleClick={() => onAddValue(".")} text={","} themeColor={themeColor}/>
				<CalculatorButton handleClick={() => onEqual()} text={GLOBAL_ICONS.equal} themeColor={themeColor} customStyle
				                  noTextStyle/>
			</div>
		</div>
	)
};

export default BasicBottomButtons;
