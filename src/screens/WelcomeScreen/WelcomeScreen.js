import React from "react";
import "./WelcomeScreen.scss"
import LayoutButton from "../../components/Buttons/LayoutButton/LayoutButton";

const WelcomeScreen = ({history}) => {
	return(
		<div className="Container">
			<header className="Header"/>
			<LayoutButton text={"Basic Calculator"} handleClick={() => history.push('/basic')}/>
			<LayoutButton text={"Advanced Calculator"}/>
			<LayoutButton text={"Material Calculator"}/>
		</div>
	)
};

export default WelcomeScreen;