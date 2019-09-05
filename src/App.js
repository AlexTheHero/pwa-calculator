import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.scss';
import BasicCalculator from './screens/BasicCalculator/BasicCalculator'
import AdvancedCalculator from "./screens/AdvancedCalculator/AdvancedCalculator";

function App() {
  return (
  	<BrowserRouter>
		  <div className="App">
			  <Route exact path="/" component={BasicCalculator}/>
			  <Route exact path="/advanced" component={AdvancedCalculator}/>
			  {/*<Route path="/completed" component={CompletedTasks}/>*/}
			  {/*<header className="App-header">*/}
				{/*  <p>My First PWA-Calculator</p>*/}
				{/*  <BasicCalculator/>*/}
			  {/*</header>*/}
		  </div>
	  </BrowserRouter>
  );
}

export default App;
