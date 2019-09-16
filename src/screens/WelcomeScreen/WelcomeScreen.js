import React from "react";
import LayoutButton from "../../components/Buttons/LayoutButton/LayoutButton";
import MainLayout from "../../components/MainLayout/MainLayout";

const WelcomeScreen = ({history}) => {
	return (
		<MainLayout>
			<LayoutButton text={"Basic Calculator"} handleClick={() => history.push('/basic')}/>
			<LayoutButton text={"Advanced Calculator"}/>
			<LayoutButton text={"Material Calculator"}/>
			<LayoutButton text={"Options"}/>
		</MainLayout>
	)
};

export default WelcomeScreen;