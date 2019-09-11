import React from "react";
import "./_Header.scss";

const Header = ({height, backgroundColor}) => {
	const theHeight = height ? height : '5%';
	const theBackground = backgroundColor ? backgroundColor : 'transparent';
	
	return (
		<div className="basicHeader" style={{height: theHeight, backgroundColor: theBackground}}>
			<div className="headerMenuButtonContainer">
				<button className="headerMenuButton">
					<p>ICON_MENU</p>
				</button>
			</div>
		</div>
	)
};

export default Header;