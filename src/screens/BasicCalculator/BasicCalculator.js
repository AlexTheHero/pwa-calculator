import React, { Component } from 'react';
import './BasicCalculator.scss';
import CalculatorButton from "../../components/Buttons/CalculatorButton/CalculatorButton";

export default class BasicCalculator extends Component {
	render() {
		return(
			<div className="Container">
				<div className="Header">
				</div>
				<div className="topContainer">
				</div>
				
				<div className="bottomContainer">
					<div className="row">
						<CalculatorButton handleClick={() => console.log('ok')} text={"del"}/>
						<CalculatorButton handleClick={() => console.log('ok')} text={"+/-"}/>
						<CalculatorButton handleClick={() => console.log('ok')} text={"%"}/>
						<CalculatorButton handleClick={() => console.log('ok')} text={"/"}/>
					</div>
					<div className="row">
						<CalculatorButton handleClick={() => console.log('ok')} text={"7"}/>
						<CalculatorButton handleClick={() => console.log('ok')} text={"8"}/>
						<CalculatorButton handleClick={() => console.log('ok')} text={"9"}/>
						<CalculatorButton handleClick={() => console.log('ok')} text={"x"} customStyle/>
					</div>
					<div className="row">
						<CalculatorButton handleClick={() => console.log('ok')} text={"4"}/>
						<CalculatorButton handleClick={() => console.log('ok')} text={"5"}/>
						<CalculatorButton handleClick={() => console.log('ok')} text={"6"}/>
						<CalculatorButton handleClick={() => console.log('ok')} text={"-"} customStyle/>
					</div>
					<div className="row">
						<CalculatorButton handleClick={() => console.log('ok')} text={"1"}/>
						<CalculatorButton handleClick={() => console.log('ok')} text={"2"}/>
						<CalculatorButton handleClick={() => console.log('ok')} text={"3"}/>
						<CalculatorButton handleClick={() => console.log('ok')} text={"+"} customStyle/>
					</div>
					<div className="row">
						<CalculatorButton handleClick={() => console.log('ok')} text={"0"}/>
						<CalculatorButton handleClick={() => console.log('ok')} isDisabled/>
						<CalculatorButton handleClick={() => console.log('ok')} text={","}/>
						<CalculatorButton handleClick={() => console.log('ok')} text={"="} customStyle/>
					</div>
				</div>
			</div>
		)
	}
}