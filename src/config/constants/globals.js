import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faAngleDoubleLeft,
	faBackspace,
	faBars,
	faDivide,
	faEquals,
	faMinus,
	faMinusSquare,
	faPercentage,
	faPlus,
	faPlusSquare,
	faTimes,
	faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

export let DEFAULT_THEME_COLOR_BODY = {};
export let DEFAULT_THEME_COLOR_HEADER = {};

export const GLOBAL_PATHS = {
	Menu: '',
	Basic: '/basic',
	Advanced: '/advanced',
	Material: '/material'
};

export const COLOR_THEME_NAMES = {
	default: 'default',
	dark_mode: 'dark',
	prestige: 'prestige'
};

export const GLOBAL_ICONS = {
	delete: <FontAwesomeIcon icon={faTrashAlt} style={{fontSize: 16}}/>,
	divide: <FontAwesomeIcon icon={faDivide} style={{fontSize: 16}}/>,
	backSpace: <FontAwesomeIcon icon={faBackspace} style={{fontSize: 16}}/>,
	menu: <FontAwesomeIcon icon={faBars} style={{fontSize: 16}}/>,
	percentage: <FontAwesomeIcon icon={faPercentage} style={{fontSize: 16}}/>,
	plus: <FontAwesomeIcon icon={faPlus} style={{fontSize: 16}}/>,
	minus: <FontAwesomeIcon icon={faMinus} style={{fontSize: 16}}/>,
	equal: <FontAwesomeIcon icon={faEquals} style={{fontSize: 16}}/>,
	multiply: <FontAwesomeIcon icon={faTimes} style={{fontSize: 16}}/>,
	plusSquare: <FontAwesomeIcon icon={faPlusSquare} style={{fontSize: 16}}/>,
	minusSquare: <FontAwesomeIcon icon={faMinusSquare} style={{fontSize: 16}}/>,
	closeWindow: <FontAwesomeIcon icon={faAngleDoubleLeft} style={{fontSize: 28}}/>,
};

//To change hover theme color, is enough to change name.
export const changeThemeColor = (themeStyle) => {
	if (typeof themeStyle !== "string" || themeStyle === COLOR_THEME_NAMES.default) {
		localStorage.setItem('SavedThemeName', COLOR_THEME_NAMES.default);
		DEFAULT_THEME_COLOR_BODY = {
			name: COLOR_THEME_NAMES.default,
			backgroundColor: 'white',
			color: '#282c34',
			deleteColor: 'indianred',
			customBackgroundColor: 'whitesmoke',
			customColor: '#475362',
			activeTouchBackgroundColor: 'indianred',
			activeTouchColor: 'whitesmoke'
		};
		DEFAULT_THEME_COLOR_HEADER = {
			name: COLOR_THEME_NAMES.default,
			backgroundColor: 'whitesmoke',
			color: '#282c34',
			returnBackgroundColor: 'transparent',
			returnColor: '#282c34',
			copyBackgroundColor: 'lightgrey',
			copyColor: '#282c34',
			activeTouchBackgroundColor: 'indianred',
			activeTouchColor: 'whitesmoke'
		};
	} else if (themeStyle === COLOR_THEME_NAMES.dark_mode) {
		localStorage.setItem('SavedThemeName', COLOR_THEME_NAMES.dark_mode);
		DEFAULT_THEME_COLOR_BODY = {
			name: COLOR_THEME_NAMES.default,
			backgroundColor: '#374252',
			color: 'lightgrey',
			deleteColor: 'indianred',
			customBackgroundColor: 'whitesmoke',
			customColor: '#475362',
			activeTouchBackgroundColor: 'indianred',
			activeTouchColor: 'whitesmoke'
		};
		DEFAULT_THEME_COLOR_HEADER = {
			name: COLOR_THEME_NAMES.dark_mode,
			backgroundColor: '#475362',
			color: 'whitesmoke',
			returnBackgroundColor: 'transparent',
			returnColor: 'whitesmoke',
			copyBackgroundColor: 'lightgrey',
			copyColor: '#475362',
			activeTouchBackgroundColor: 'indianred',
			activeTouchColor: 'whitesmoke'
		};
	} else if (themeStyle === COLOR_THEME_NAMES.prestige) {
		localStorage.setItem('SavedThemeName', COLOR_THEME_NAMES.prestige);
		DEFAULT_THEME_COLOR_BODY = {
			name: COLOR_THEME_NAMES.prestige,
			backgroundColor: '#f6ca69',
			color: '#402103',
			deleteColor: '#D86489',
			customBackgroundColor: 'rgba(15, 22, 30, 0.74)',
			customColor: 'rgba(255, 255, 224, 0.75)',
			activeTouchBackgroundColor: 'rgba(65, 65, 129, 0.8)',
			activeTextColor: '#D86489'
		};
		DEFAULT_THEME_COLOR_HEADER = {
			name: COLOR_THEME_NAMES.prestige,
			background: 'linear-gradient(#ffda68, #f6ca69, #FDE08D, #DF9F28)',
			backgroundColor: 'transparent',
			color: '#402103',
			customMenuColors: 'true',
			menuBackgroundColor: 'transparent',
			menuColor: '#402103',
			returnBackgroundColor: 'transparent',
			returnColor: '#402103',
			copyBackgroundColor: '#374252',
			copyColor: '#f6ca69',
			activeTouchBackgroundColor: 'rgba(72, 61, 139, 0.75)',
			activeTextColor: 'rgba(255, 255, 224, 0.75)'
		};
	}
};