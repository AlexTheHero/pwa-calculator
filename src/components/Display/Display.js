import React from "react";
import "./_Display.scss";
import {GLOBAL_ICONS} from "../../config/constants/globals";

const changeTextSize = (text) => {
	let rightEm = 2.4 * (14 / text.length);
	
	if (text.length > 14) {
		return `${rightEm}em`;
	}
	return '2.4em';
};

const Display = ({props}) => {
	let textDisplay = props.displayValue ? props.displayValue : "";
	let historyDisplay = props.displayHistory ? props.displayHistory : "";
	let symbolDisplay = props.displaySymbol ? props.displaySymbol : "";
	let fontSize = props.displayValue ? changeTextSize(props.displayValue) : '2.4em';
	
	return (
		<div className="displayContainer">
			<div className="displayTopContainer">
				<p className="displayTopText">{historyDisplay}</p>
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
				<div className="displayBottomButtonsContainer">
					<button className="displayCopyButton">
						<p className="displayButtonsText">COPY</p>
					</button>
				</div>
				<div className="displayBottomButtonsContainer">
					<button className="displayReturnButton">
						{GLOBAL_ICONS.backSpace}
					</button>
				</div>
			</div>
		</div>
	)
};

export default Display;