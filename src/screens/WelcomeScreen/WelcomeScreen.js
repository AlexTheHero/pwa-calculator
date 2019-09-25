import React, {Component} from "react";
import LayoutButton from "../../components/Buttons/LayoutButton/LayoutButton";
import MainLayout from "../../components/MainLayout/MainLayout";
import {changeThemeColor} from "../../config/constants/globals";

export default class WelcomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activateThemeColor: false
		};
	}
	
	componentDidMount() {
		changeThemeColor(localStorage.getItem('SavedThemeName'));
		this.setState({activateThemeColor: true})
	}
	
	render() {
		return (
			<MainLayout>
				<LayoutButton text={"Basic Calculator"} handleClick={() => this.props.history.push('/basic')}/>
				<LayoutButton text={"Advanced Calculator"} handleClick={() => this.props.history.push('/advanced')}/>
				<LayoutButton text={"Material Calculator"} handleClick={() => this.props.history.push('/material')}/>
				<LayoutButton text={"Options"} handleClick={() => this.props.history.push('/options')}/>
			</MainLayout>
		)
	}
};