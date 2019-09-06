import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.scss';
import BasicCalculator from './screens/BasicCalculator/BasicCalculator'
import AdvancedCalculator from "./screens/AdvancedCalculator/AdvancedCalculator";
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";

const App = () => {
  return (
  	<BrowserRouter>
		  <div className="App">
			  <Route exact path="/" component={WelcomeScreen} render={(props) => <WelcomeScreen {...props}/>}/>
			  <Route exact path="/basic" component={BasicCalculator} />
			  <Route exact path="/advanced" component={AdvancedCalculator}/>
			  <Route exact path="/material" />
		  </div>
	  </BrowserRouter>
  );
};

export default App;
