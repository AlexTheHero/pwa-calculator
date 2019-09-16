import React from 'react';
import "./_Drawer.scss";
import DrawerButton from "./DrawerButton";
import {GLOBAL_PATHS} from "../../config/constants/globals";

const Drawer = ({closeDrawer, routes}) => {
	const currentLocation = routes.location.pathname;
	const handleNavigation = (path) => {
		routes.replace(path)
	};
	
	return (
		<div className="DrawerContainer">
			<div className="LeftSide">
				<div className="DrawerButtonsContainer">
					<DrawerButton text={"Main Menu"}
					              handleNavigation={() => handleNavigation(GLOBAL_PATHS.Menu)}
					              disabled={currentLocation === GLOBAL_PATHS.Menu}/>
					<DrawerButton text={"Basic Calculator"}
					              handleNavigation={() => handleNavigation(GLOBAL_PATHS.Basic)}
					              disabled={currentLocation === GLOBAL_PATHS.Basic}/>
					<DrawerButton text={"Advanced Calculator"}
					              handleNavigation={() => handleNavigation(GLOBAL_PATHS.Advanced)}
					              disabled={currentLocation === GLOBAL_PATHS.Advanced}/>
					<DrawerButton text={"Material Calculator"}
					              handleNavigation={() => handleNavigation(GLOBAL_PATHS.Material)}
					              disabled={currentLocation === GLOBAL_PATHS.Material}/>
				</div>
			</div>
			<div className="RightSide">
				<button onClick={() => closeDrawer()} className="CloseDrawerButton"/>
			</div>
		</div>
	)
};

export default Drawer;