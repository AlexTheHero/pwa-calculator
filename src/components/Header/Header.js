import React, {useState} from "react";
import "./_Header.scss";
import Drawer from "../Drawer/Drawer";
import {GLOBAL_ICONS} from "../../config/constants/globals";

const Header = ({height, themeColor, routes}) => {
	const theHeight = height ? height : '5%';
	const [openMenu, setOpenMenu] = useState(false);
	
	return (
		<div className="basicHeader" style={{height: theHeight, ...themeColor}}>
			<div className="headerMenuButtonContainer">
				<button className="headerMenuButton" onClick={() => setOpenMenu(!openMenu)}
				        style={themeColor.customMenuColors ?
					        {backgroundColor: themeColor.menuBackgroundColor, color: themeColor.menuColor}
					        :
					        {}}>
					{GLOBAL_ICONS.menu}
				</button>
			</div>
			{openMenu && <Drawer closeDrawer={() => setOpenMenu(!openMenu)} routes={routes}/>}
		</div>
	)
};

export default Header;