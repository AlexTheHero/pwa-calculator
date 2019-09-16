import React from 'react';
import "./_Drawer.scss";

const DrawerButton = ({text, handleNavigation, disabled}) => {
	return (
		disabled ?
			<div/>
			:
			<button className="DrawerButton" onClick={handleNavigation}>
				<p className="DrawerButtonText">{text}</p>
			</button>
	)
};

export default DrawerButton;