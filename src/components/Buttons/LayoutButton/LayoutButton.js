import React from "react";
import "./LayoutButton.scss"

const LayoutButton = ({handleClick, text}) => {
	const defaultText = text ? text : " ";
	
	return(
		<button className="Button" onClick={handleClick}>
			<p className="Text">{defaultText}</p>
		</button>
	)
};

export default LayoutButton;