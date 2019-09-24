import React, {useState} from 'react';
import './_CalculatorButton.scss';

const CalculatorButton = ({handleClick, text, customStyle, isDisabled, noTextStyle}) => {
	const containerStyle = customStyle ? "ButtonStructure" : "DefaultButtonStructure";
	const defaultText = text || "CalculatorButton Text Info";
	const [changeColor, setColor] = useState(false);
	const [isTouchActive, setTouch] = useState(false);
	const handleTouchButton = () => {
		setColor(true);
		setTimeout(() => setColor(false), 250);
	};
	
	let styles = isTouchActive ? {
		backgroundColor: changeColor ? 'IndianRed' : customStyle ? 'whitesmoke' : 'white',
		color: changeColor ? 'white' : 'black'
	} : {};
	
	
	return (
		isDisabled ?
			<div className={"DefaultButtonContainer"}/>
			:
			<button className="DefaultButtonContainer"
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