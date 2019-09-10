import React from "react";
import "./Display.scss";

const changeTextSize = (text) => {
	let rightEm = 2.4 * (14 / text.length);
	
	if (text.length > 14) {
		return `${rightEm}em`;
	}
	return '2.4em';
};

const Display = ({props}) => {
	let textDisplay = props.displayValue ? props.displayValue : "0";
	let symbolDisplay = props.displaySymbol ? props.displaySymbol : " ";
	let fontSize = props.displayValue ? changeTextSize(props.displayValue) : '2.4em';
	
	return (
		<div className="displayContainer">
			<div className="displayTopContainer">
				<p className="displayTopText">value</p>
			</div>
			<div className="displayMainTextContainer">
				<div className="displayMainLeft">
					<p className="displayRightText">{symbolDisplay}</p>
				</div>
				<div className="displayMainRight">
					<p className="displayMainText" style={{fontSize: fontSize}}>{textDisplay}</p>
				</div>
			</div>
			<div className="displayBottomContainer">
				<p>value</p>
			</div>
		</div>
	)
};

export default Display;