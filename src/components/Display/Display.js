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

const getResultText = (text) => {
	return /=(.+)/.exec(text)[1];
};

const getHistory = (text) => {
	let newText = '';
	if (text.includes('=')) {
		newText = text.substring(text.indexOf("="), -1) + '=';
		return newText;
	}
	return text;
};

const Display = ({props, result, copied, copyToClipboard}) => {
	let textDisplay = props.displayValue ? props.displayValue : "";
	let historyDisplay = props.displayHistory ? getHistory(props.displayHistory) : "";
	let resultText = props.displayHistory ? props.displayHistory.includes('=') && getResultText(props.displayHistory) : '';
	let symbolDisplay = props.displaySymbol ? props.displaySymbol : "";
	let fontSize = props.displayValue ? changeTextSize(props.displayValue) : '2.4em';
	
	return (
		<div className="displayContainer">
			{copied && <p className="displayCopyPopup">The result is copied</p>}
			{result && <p className="displayCopyPopup">There is no result to copy</p>}
			<div className="displayTopContainer">
				<p className="displayTopText">{historyDisplay}<em> {resultText}</em></p>
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
						<p className="displayButtonsText" onClick={(e) => copyToClipboard(e, resultText)}>COPY</p>
					</button>
				</div>
				<div className="displayBottomButtonsContainer">
					<button className="displayReturnButton" onClick={() => props.oneStepBackward()}>
						{GLOBAL_ICONS.backSpace}
					</button>
				</div>
			</div>
		</div>
	)
};

export default Display;