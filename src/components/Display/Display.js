import React, {useState} from "react";
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
	const [isTouchActive, setTouch] = useState(false);
	const [changeColor, setColor] = useState(false);
	const [changeColorReturn, setColorReturn] = useState(false);
	let stylesCopy = isTouchActive ? {
			backgroundColor: changeColor ? 'IndianRed' : 'lightgrey', color: changeColor ? 'white' : 'black'
		}
		: {};
	let stylesReturn = isTouchActive ? {
			backgroundColor: changeColorReturn ? 'IndianRed' : 'transparent', color: changeColorReturn ? 'white' : 'black'
		}
		: {};
	const handleTouchButton = () => {
		setColor(true);
		setTimeout(() => setColor(false), 250);
	};
	
	const handleTouchButtonReturn = () => {
		setColorReturn(true);
		setTimeout(() => setColorReturn(false), 250);
	};
	
	return (
		<div className="displayContainer">
			{copied &&
			<div className="displayCopyPopContainer">
				<p className="displayCopyPopup">The result is copied</p>
			</div>}
			{result &&
			<div className="displayCopyPopContainer">
				<p className="displayCopyPopup">There is no result to copy</p>
			</div>}
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
					<button className="displayCopyButton"
					        onTouchStart={() => !isTouchActive && setTouch(true)}
					        onTouchEnd={() => handleTouchButton()}
					        style={stylesCopy}
					>
						<p className="displayButtonsText" onClick={(e) => copyToClipboard(e, resultText)}>COPY</p>
					</button>
				</div>
				<div className="displayBottomButtonsContainer">
					<button className="displayReturnButton"
					        onClick={() => props.oneStepBackward()}
					        onTouchStart={() => !isTouchActive && setTouch(true)}
					        onTouchEnd={() => handleTouchButtonReturn()}
					        style={stylesReturn}
					>
						{GLOBAL_ICONS.backSpace}
					</button>
				</div>
			</div>
		</div>
	)
};

export default Display;