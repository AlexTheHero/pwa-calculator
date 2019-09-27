import React, {Component} from 'react';
import './_AdvancedCalculator.scss';
import LayoutButton from "../../components/Buttons/LayoutButton/LayoutButton";
import {DEFAULT_THEME_COLOR_BODY} from "../../config/constants/globals";

export default class AdvancedCalculator extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}
	
	render() {
		const {props} = this;
		return (
			<div className="AdvancedContainer">
				<p className="AdvancedContainerParagraph">IN DEVELOPMENT</p>
				<LayoutButton handleClick={() => props.history.replace("/")} text={"MAIN MENU"} themeColorName={DEFAULT_THEME_COLOR_BODY.name}/>
				<LayoutButton handleClick={props.history.goBack} text={"GO BACK"} themeColorName={DEFAULT_THEME_COLOR_BODY.name}/>
			</div>
		)
	}
};