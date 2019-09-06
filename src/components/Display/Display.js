import React from "react";
import "./Display.scss";

const Display = ({props}) => {
	let textDisplay = props.basic.displayValue ? props.basic.displayValue : "0";
	
	return(
		<div className="mainContainer">
			
			<div className="topTextContainer">
				<p className="topText">value</p>
			</div>
			
			<div className="mainTextContainer">
				<div className="mainContainerSeparatorLeft">
					<p className="mainText"> - </p>
				</div>
				<div className="mainContainerSeparatorRight">
					<p className="mainText">{textDisplay}</p>
				</div>
			</div>
			
			<div className="bottomTextContainer">
				<p>value</p>
			</div>
		</div>
	)
};

export default Display;