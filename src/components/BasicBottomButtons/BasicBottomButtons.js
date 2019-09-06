import CalculatorButton from "../Buttons/CalculatorButton/CalculatorButton";
import React from "react";
import "./BasicBottomButtons.scss";

const BasicBottomButtons = ({props}) => {
	console.log(props)
	return(
		<div className="bottomContainer">
			<div className="row">
				<CalculatorButton handleClick={() => props.clearData()} text={"del"}/>
				<CalculatorButton handleClick={() => console.log('ok')} text={"+/-"}/>
				<CalculatorButton handleClick={() => console.log('ok')} text={"%"}/>
				<CalculatorButton handleClick={() => console.log('ok')} text={"/"}/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => props.addValue(7)} text={"7"}/>
				<CalculatorButton handleClick={() => props.addValue(8)} text={"8"}/>
				<CalculatorButton handleClick={() => props.addValue(9)} text={"9"}/>
				<CalculatorButton handleClick={() => console.log('ok')} text={"x"} customStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => props.addValue(4)} text={"4"}/>
				<CalculatorButton handleClick={() => props.addValue(5)} text={"5"}/>
				<CalculatorButton handleClick={() => props.addValue(6)} text={"6"}/>
				<CalculatorButton handleClick={() => console.log('ok')} text={"-"} customStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => props.addValue(1)} text={"1"}/>
				<CalculatorButton handleClick={() => props.addValue(2)} text={"2"}/>
				<CalculatorButton handleClick={() => props.addValue(3)} text={"3"}/>
				<CalculatorButton handleClick={() => console.log('ok')} text={"+"} customStyle/>
			</div>
			<div className="row">
				<CalculatorButton handleClick={() => props.addValue(0)} text={"0"}/>
				<CalculatorButton handleClick={() => console.log('ok')} isDisabled/>
				<CalculatorButton handleClick={() => console.log('ok')} text={","}/>
				<CalculatorButton handleClick={() => console.log('ok')} text={"="} customStyle/>
			</div>
		</div>
	)
};

export default BasicBottomButtons;
