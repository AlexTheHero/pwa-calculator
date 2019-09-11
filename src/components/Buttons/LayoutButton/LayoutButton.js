import React from "react";
import "./_LayoutButton.scss"

const LayoutButton = ({handleClick, text}) => {
	const defaultText = text ? text : " ";
	
	return(
		<button className="layoutButton" onClick={handleClick}>
			<p className="Text">{defaultText}</p>
		</button>
	)
};

export default LayoutButton;