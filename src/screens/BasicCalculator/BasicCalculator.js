import React, { Component } from 'react';
import './BasicCalculator.scss';
import Button from "../../components/Buttons/Button";

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
						<Button handleClick={() => console.log('ok')} text={"del"}/>
						<Button handleClick={() => console.log('ok')} text={"+/-"}/>
						<Button handleClick={() => console.log('ok')} text={"%"}/>
						<Button handleClick={() => console.log('ok')} text={"/"}/>
					</div>
					<div className="row">
						<Button handleClick={() => console.log('ok')} text={"7"}/>
						<Button handleClick={() => console.log('ok')} text={"8"}/>
						<Button handleClick={() => console.log('ok')} text={"9"}/>
						<Button handleClick={() => console.log('ok')} text={"x"} customStyle/>
					</div>
					<div className="row">
						<Button handleClick={() => console.log('ok')} text={"4"}/>
						<Button handleClick={() => console.log('ok')} text={"5"}/>
						<Button handleClick={() => console.log('ok')} text={"6"}/>
						<Button handleClick={() => console.log('ok')} text={"-"} customStyle/>
					</div>
					<div className="row">
						<Button handleClick={() => console.log('ok')} text={"1"}/>
						<Button handleClick={() => console.log('ok')} text={"2"}/>
						<Button handleClick={() => console.log('ok')} text={"3"}/>
						<Button handleClick={() => console.log('ok')} text={"+"} customStyle/>
					</div>
					<div className="row">
						<Button handleClick={() => console.log('ok')} text={"0"}/>
						<Button handleClick={() => console.log('ok')} isDisabled/>
						<Button handleClick={() => console.log('ok')} text={","}/>
						<Button handleClick={() => console.log('ok')} text={"="} customStyle/>
					</div>
				</div>
			</div>
		)
	}
}