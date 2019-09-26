import React from "react";
import LayoutButton from "../../components/Buttons/LayoutButton/LayoutButton";
import MainLayout from "../../components/MainLayout/MainLayout";
import {DEFAULT_THEME_COLOR_BODY} from "../../config/constants/globals";


const WelcomeScreen = ({history}) => {
	return (
		<MainLayout>
			<LayoutButton text={"Basic Calculator"} handleClick={() => history.push('/basic')}
			              themeColorName={DEFAULT_THEME_COLOR_BODY.name}/>
			<LayoutButton text={"Advanced Calculator"} handleClick={() => history.push('/advanced')}
			              themeColorName={DEFAULT_THEME_COLOR_BODY.name}/>
			<LayoutButton text={"Material Calculator"} handleClick={() => history.push('/material')}
			              themeColorName={DEFAULT_THEME_COLOR_BODY.name}/>
			<LayoutButton text={"Options"} handleClick={() => history.push('/options')}
			              themeColorName={DEFAULT_THEME_COLOR_BODY.name}/>
		</MainLayout>
	)
};

export default WelcomeScreen;