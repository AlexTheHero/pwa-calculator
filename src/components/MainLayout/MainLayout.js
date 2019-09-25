import React, {Component} from 'react';
import './MainLayout.scss';
import {DEFAULT_THEME_COLOR_BODY} from '../../config/constants/globals'

export default class MainLayout extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props)
	}
	
	render() {
		return(
			<div className="Container" style={DEFAULT_THEME_COLOR_BODY}>
				{this.props.children}
			</div>
		)
	}
};