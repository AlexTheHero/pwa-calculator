import React, {Component} from 'react';
import "./_Drawer.scss";
import DrawerButton from "./DrawerButton";
import {GLOBAL_PATHS} from "../../config/constants/globals";

export default class Drawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animatedOpacity: 0,
			animatedWidth: '0%'
		}
	}
	
	componentDidMount() {
		this.openDrawerAnimated();
	}
	
	closeDrawerAnimated = (AOp = this.state.animatedOpacity, Width = this.state.animatedWidth) => {
		let aWidth = Number(Width.replace('%', ''));
		let op = AOp;
		
		const frame = () => {
			if (op < 0) {
				this.props.closeDrawer();
				clearInterval(id);
			} else {
				aWidth -= 3;
				op -= 0.05;
				this.setState({animatedOpacity: op, animatedWidth: aWidth + '%'});
			}
		};
		
		let id = setInterval(frame, 30);
	};
	
	openDrawerAnimated = () => {
		let aWidth = 0;
		let op = 0;
		const frame = () => {
			if (op > 1) {
				clearInterval(id);
			} else {
				aWidth += 5;
				op += 0.05;
				this.setState({animatedOpacity: op, animatedWidth: aWidth + '%'});
			}
		};
		
		let id = setInterval(frame, 30);
	};
	
	
	render() {
		const currentLocation = this.props.routes.location.pathname;
		const handleNavigation = (path) => {
			this.props.routes.push(path)
		};
		
		return (
			<div className="DrawerContainer">
				<div className="animatedContainer"
				     style={{
					     width: this.state.animatedWidth,
					     opacity: this.state.animatedOpacity,
					     height: '100%',
				     }}>
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
						<button onClick={() => this.closeDrawerAnimated()} className="CloseDrawerButton"/>
					</div>
				</div>
			</div>
		)
	}
};