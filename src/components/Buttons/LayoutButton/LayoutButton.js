import React from "react";
import "./LayoutButton.scss"

const LayoutButton = ({handleClick, text}) => {
	const defaultText = text ? text : " ";
	
	return(
		<button className="Button">
			<p className="Text">{defaultText}</p>
		</button>
	)
};

export default LayoutButton;