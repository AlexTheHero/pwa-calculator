import React from "react";
import LayoutButton from "../../components/Buttons/LayoutButton/LayoutButton";
import MainLayout from "../../components/MainLayout/MainLayout";


const WelcomeScreen = ({history}) => {
	
	return (
		<MainLayout>
			<LayoutButton text={"Basic Calculator"} handleClick={() => history.push('/basic')}/>
			<LayoutButton text={"Advanced Calculator"} handleClick={() => history.push('/advanced')}/>
			<LayoutButton text={"Material Calculator"} handleClick={() => history.push('/material')}/>
			<LayoutButton text={"Options"} handleClick={() => history.push('/options')}/>
		</MainLayout>
	)
};

export default WelcomeScreen;