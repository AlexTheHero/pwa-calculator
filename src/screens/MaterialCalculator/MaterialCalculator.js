import React, {Component} from 'react';
import LayoutButton from "../../components/Buttons/LayoutButton/LayoutButton";

export default class MaterialCalculator extends Component {
	// eslint-disable-next-line no-useless-constructor
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