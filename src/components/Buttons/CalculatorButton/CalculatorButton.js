import React, {useState} from 'react';
import './_CalculatorButton.scss';

const CalculatorButton = ({handleClick, text, customStyle, isDisabled, noTextStyle, deleteColor, themeColor}) => {
	const containerStyle = deleteColor ? "DeleteButtonStructure" : customStyle ? "ButtonStructure" : "DefaultButtonStructure";
	const defaultText = text || "CalculatorButton Text Info";
	const [changeColor, setColor] = useState(false);
	const [isTouchActive, setTouch] = useState(false);
	const handleTouchButton = () => {
		setColor(true);
		setTimeout(() => setColor(false), 250);
	};
	let styles = isTouchActive ? {
		backgroundColor: changeColor ? 'IndianRed' : customStyle ? 'whitesmoke' : themeColor.backgroundColor,
		color: changeColor ? 'white' : themeColor ? themeColor.color : 'black'
	} : {};
	
	
	return (
		isDisabled ?
			<div className={"DefaultButtonContainer"}/>
			:
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