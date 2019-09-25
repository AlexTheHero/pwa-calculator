import React, {Component} from 'react';
import {changeThemeColor, COLOR_THEME_NAMES, DEFAULT_THEME_COLOR_BODY} from "../../config/constants/globals";
import "./_Options.scss"

export default class Options extends Component {
	constructor(props) {
		super(props);
		this.state = {
			changeStyle: true,
			isTouchActive: false,
		};
	}
	
	componentDidMount() {
		document.addEventListener('keydown', (e) => this.handleTyping(e.key));
	}
	
	handleClick = (themeName) => {
		changeThemeColor(themeName);
		this.setState({changeStyle: !this.state.changeStyle})
	};
	
	
	render() {
		const {isTouchActive} = this.state;
		
		return (
			<div className="Container" style={DEFAULT_THEME_COLOR_BODY}>
				<button onClick={() => this.handleClick(COLOR_THEME_NAMES.default)} className="DefaultThemeButton"
				        onTouchStart={() => this.setState({isTouchActive: true})}
				        style={isTouchActive ? {backgroundColor: "#8b2d4d"} : {}}>
					<p className="DefaultThemeText" style={isTouchActive ? {color: "white"} : {}}>DEFAULT</p>
				</button>
				<button onClick={() => this.handleClick(COLOR_THEME_NAMES.dark_mode)} className="DarkModeThemeButton"
				        onTouchStart={() => this.setState({isTouchActive: true})}
				        style={isTouchActive ? {backgroundColor: "darkseagreen"} : {}}>
					<p className="DarkModeThemeText" style={isTouchActive ? {color: "#374252"} : {}}>DARK_MODE</p>
				</button>
				<button onClick={() => this.props.history.push('/')} className="CloseOptionMenu">
					<p className="CloseOptionText">CLOSE</p>
				</button>
			</div>
		)
	}
};