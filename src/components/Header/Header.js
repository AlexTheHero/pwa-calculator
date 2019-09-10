import React from "react";
import "./Header.scss";

const Header = ({height, backgroundColor}) => {
	const theHeight = height ? height : '5%';
	const theBackground = backgroundColor ? backgroundColor : 'transparent';
	
	return(
		<div className="basicHeader" style={{height: theHeight, backgroundColor: theBackground}}>
		</div>
	)
};

export default Header;