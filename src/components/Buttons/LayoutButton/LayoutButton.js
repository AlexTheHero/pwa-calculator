import React from "react";
import "./_LayoutButton.scss"

const LayoutButton = ({handleClick, text, themeColorName}) => {
	const currentThemeColor = `${themeColorName}LayoutButton`;
	const defaultText = text ? text : " ";
	
	return(
		<button className={currentThemeColor} onClick={handleClick}>
			<p className="Text">{defaultText}</p>
		</button>
	)
};

export default LayoutButton;