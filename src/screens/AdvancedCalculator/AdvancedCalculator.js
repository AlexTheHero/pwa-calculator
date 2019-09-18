import React, {Component} from 'react';
import './_AdvancedCalculator.scss';
import LayoutButton from "../../components/Buttons/LayoutButton/LayoutButton";

export default class AdvancedCalculator extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const {props} = this;
		return (
			<div className="AdvancedContainer">
				<p className="AdvancedContainerParagraph">UNDER CONSTRUCTION</p>
				<LayoutButton handleClick={() => props.history.replace("/")} text={"MAIN MENU"}/>
				<LayoutButton handleClick={props.history.goBack} text={"GO BACK"}/>
			</div>
		)
	}
};