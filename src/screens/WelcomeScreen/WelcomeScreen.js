import React from "react";
import "./WelcomeScreen.scss"
import LayoutButton from "../../components/Buttons/LayoutButton/LayoutButton";
import Route from "react-router-dom/es/Route";

const WelcomeScreen = ({history}) => {
	return(
		<div className="Container">
			<header className="Header"/>
			<Route path="/" render={(props) => <LayoutButton text={"Basic Calculator"} handleClick={() => props.history.push('/basic')}/>} />
			<LayoutButton text={"Advanced Calculator"}/>
			<LayoutButton text={"Material Calculator"}/>
		</div>
	)
};

export default WelcomeScreen;