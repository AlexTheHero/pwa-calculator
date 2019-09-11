import React from 'react';
import './_CalculatorButton.scss';

const CalculatorButton = ({handleClick, text, customStyle, isDisabled}) => {
	const containerStyle = customStyle ? "ButtonStructure" : "DefaultButtonStructure";
	const defaultText = text || "CalculatorButton Text Info";
	
	return (
		isDisabled ?
			<div className={"DefaultButtonContainer"}/>
			:
			<button className="DefaultButtonContainer" onClick={handleClick}>
				<div className={containerStyle}>
					<p className="textStyle">{defaultText}</p>
				</div>
			</button>
	)
};

export default CalculatorButton;