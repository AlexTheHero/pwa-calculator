import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
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
	faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

export let DEFAULT_THEME_COLOR_BODY = {backgroundColor: 'white', color: '#282c34'};
export let DEFAULT_THEME_COLOR_HEADER = {backgroundColor: 'whitesmoke', color: '#282c34'};

export const GLOBAL_PATHS = {
	Menu: '',
	Basic: '/basic',
	Advanced: '/advanced',
	Material: '/material'
};

export const COLOR_THEME_NAMES = {
	default: 'default',
	dark_mode: 'dark',
	prestige: 'gold'
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
};

export const changeThemeColor = (themeStyle) => {
	if (themeStyle === COLOR_THEME_NAMES.default) {
		localStorage.setItem('SavedThemeName', COLOR_THEME_NAMES.default);
		DEFAULT_THEME_COLOR_BODY = {backgroundColor: 'white', color: '#282c34'};
		DEFAULT_THEME_COLOR_HEADER = {backgroundColor: 'whitesmoke', color: '#282c34'};
	} else if (themeStyle === COLOR_THEME_NAMES.dark_mode) {
		localStorage.setItem('SavedThemeName', COLOR_THEME_NAMES.dark_mode);
		DEFAULT_THEME_COLOR_BODY = {backgroundColor: '#374252', color: 'lightgrey'};
		DEFAULT_THEME_COLOR_HEADER = {backgroundColor: '#475362', color: 'whitesmoke'};
	} else if (themeStyle === COLOR_THEME_NAMES.prestige) {
		localStorage.setItem('SavedThemeName', COLOR_THEME_NAMES.prestige);
		DEFAULT_THEME_COLOR_BODY = {backgroundColor: 'grey', color: 'green'};
		DEFAULT_THEME_COLOR_HEADER = {backgroundColor: 'blue', color: 'blue'};
	}
};