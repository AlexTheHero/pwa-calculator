import React, {useState} from 'react';
import './_CalculatorButton.scss';

const detectCurrentThemeColors = (name, custom) => {
	if (custom) {
		return `${name}CustomSymbolButton`;
	} else {
		return `${name}SymbolButton`;
	}
};

const CalculatorButton = ({handleClick, text, customStyle, isDisabled, noTextStyle, deleteColor, themeColor}) => {
	const [changeColor, setColor] = useState(false);
	const [isTouchActive, setTouch] = useState(false);
	
	if (isDisabled) return <div className={"DefaultButtonContainer"}/>;
	
	const containerStyle = deleteColor ? `${themeColor.name}DeleteButton` : detectCurrentThemeColors(themeColor.name, customStyle);
	const defaultText = text || "";
	const handleTouchButton = () => {
		setColor(true);
		setTimeout(() => setColor(false), 250);
	};
	let styles = isTouchActive ? {
		backgroundColor: changeColor ? themeColor.activeTouchBackgroundColor : customStyle ? themeColor.customBackgroundColor : themeColor.backgroundColor,
		color: changeColor ? themeColor.activeTouchColor : customStyle ? themeColor.customColor : deleteColor ? themeColor.deleteColor : themeColor.color
	} : {};
	
	
	return (
		<button className="DefaultButtonContainer"
		        style={themeColor}
		        onClick={handleClick}
		        onTouchEnd={() => handleTouchButton()}
		        onTouchStart={() => !isTouchActive && setTouch(true)}
		>
			<div className={containerStyle} style={styles}>
				<p className={noTextStyle ? "false" : "textStyle"}>{defaultText}</p>
			</div>
		</button>
	)
};

export default CalculatorButton;