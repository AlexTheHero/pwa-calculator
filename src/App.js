import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import BasicCalculator from './screens/BasicCalculator/BasicCalculator'
import AdvancedCalculator from "./screens/AdvancedCalculator/AdvancedCalculator";
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import MaterialCalculator from "./screens/MaterialCalculator/MaterialCalculator";
import Options from "./screens/Options/Options";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={WelcomeScreen}/>
					<Route exact path="/basic" component={BasicCalculator}/>
					<Route exact path="/advanced" component={AdvancedCalculator}/>
					<Route exact path="/material" component={MaterialCalculator}/>
					<Route exact path="/options" component={Options}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
