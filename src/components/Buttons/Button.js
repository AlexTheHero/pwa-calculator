import React from 'react';
import './Button.scss';

const Button = ({handleClick, text, customStyle, isDisabled}) => {
	const containerStyle = customStyle ? "ButtonStructure" : "DefaultButtonStructure";
	const defaultText = text || "Button Text Info";
	
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

export default Button;