import React from "react";
import LayoutButton from "../../components/Buttons/LayoutButton/LayoutButton";
import MainLayout from "../../components/MainLayout/MainLayout";
import Header from "../../components/Header/Header";

const WelcomeScreen = ({history}) => {
	return (
		<MainLayout>
			<Header height="40%"/>
			<LayoutButton text={"Basic Calculator"} handleClick={() => history.push('/basic')}/>
			<LayoutButton text={"Advanced Calculator"}/>
			<LayoutButton text={"Material Calculator"}/>
		</MainLayout>
	)
};

export default WelcomeScreen;