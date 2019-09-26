import React, {useState} from "react";
import "./_Display.scss";
import {COLOR_THEME_NAMES, GLOBAL_ICONS} from "../../config/constants/globals";

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

const detectCopyColorTheme = (name) => {
	if(COLOR_THEME_NAMES.prestige === name){
		return `${name}CopyTheme`
	}
	return 'displayCopyButton';
};

const detectReturnColorTheme = (name) => {
	if(COLOR_THEME_NAMES.prestige === name){
		return `${name}ReturnTheme`
	}else if(COLOR_THEME_NAMES.dark_mode === name){
		return `${name}ReturnTheme`
	}
	return 'displayReturnButton';
};

const Display = ({props, result, copied, copyToClipboard, themeColor}) => {
	let textDisplay = props.displayValue ? props.displayValue : "";
	let historyDisplay = props.displayHistory ? getHistory(props.displayHistory) : "";
	let resultText = props.displayHistory ? props.displayHistory.includes('=') && getResultText(props.displayHistory) : '';
	let symbolDisplay = props.displaySymbol ? props.displaySymbol : "";
	let fontSize = props.displayValue ? changeTextSize(props.displayValue) : '2.4em';
	const copyColorTheme = detectCopyColorTheme(themeColor.name);
	const returnColorTheme = detectReturnColorTheme(themeColor.name);
	const [isTouchActive, setTouch] = useState(false);
	const [changeColor, setColor] = useState(false);
	const [changeColorReturn, setColorReturn] = useState(false);
	let stylesCopy = isTouchActive ?
		{
			backgroundColor: changeColor ? themeColor.activeTouchBackgroundColor : themeColor.copyBackgroundColor,
			color: changeColor ? themeColor.activeTextColor : themeColor.copyColor
		} : {};
	let stylesReturn = isTouchActive ?
		{
			backgroundColor: changeColorReturn ? themeColor.activeTouchBackgroundColor : themeColor.returnBackgroundColor,
			color: changeColorReturn ? themeColor.activeTextColor : themeColor.returnColor
		} : {};
	const handleTouchButton = () => {
		setColor(true);
		setTimeout(() => setColor(false), 250);
	};
	
	const handleTouchButtonReturn = () => {
		setColorReturn(true);
		setTimeout(() => setColorReturn(false), 250);
	};
	
	return (
		<div className="displayContainer" style={themeColor}>
			{copied &&
			<div className="displayCopyPopContainer">
				<p className="displayCopyPopup" style={{color: themeColor.activeTouchBackgroundColor}}>The result is copied</p>
			</div>}
			{result &&
			<div className="displayCopyPopContainer">
				<p className="displayCopyPopup" style={{color: themeColor.activeTouchBackgroundColor}}>There is no result to copy</p>
			</div>}
			<div className="displayTopContainer">
				<p className="displayTopText">{historyDisplay}<em> {resultText}</em></p>
			</div>
			<div className="displayMainTextContainer">
				<div className="displayMainLeft">
					<p className="displayRightText" style={{color: themeColor.color}}>{symbolDisplay}</p>
				</div>
				<div className="displayMainRight">
					<p className="displayMainText" style={{fontSize: fontSize, color: themeColor.color}}>{textDisplay}</p>
				</div>
			</div>
			<div className="displayBottomContainer">
				<div className="displayBottomButtonsContainer">
					<button className={copyColorTheme}
					        onTouchStart={() => !isTouchActive && setTouch(true)}
					        onTouchEnd={() => handleTouchButton()}
					        style={stylesCopy}
					        onClick={(e) => copyToClipboard(e, resultText)}
					>
						<p className="displayButtonsText">COPY</p>
					</button>
				</div>
				<div className="displayBottomButtonsContainer">
					<button className={returnColorTheme}
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