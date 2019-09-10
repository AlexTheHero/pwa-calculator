import React, {Component} from 'react';
import './MainLayout.scss';

export default class MainLayout extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props)
	}
	
	render() {
		return(
			<div className="Container">
				{this.props.children}
			</div>
		)
	}
};