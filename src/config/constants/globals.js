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

export const GLOBAL_PATHS = {
	Menu: '',
	Basic: '/basic',
	Advanced: '/advanced',
	Material: '/material'
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