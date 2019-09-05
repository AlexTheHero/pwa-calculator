import React, { Component } from 'react';
import './BasicCalculator.scss';
import Button from "../../components/Buttons/Button";

export default class BasicCalculator extends Component {
	render() {
		// You can use them as regular CSS styles
		return(
			<div className="Container">
				<div className="topContainer">
				</div>
				<div className="bottomContainer">
					<Button handleClick={() => console.log('ok')}/>
					<Button/>
				</div>
			</div>
		)
	}
}