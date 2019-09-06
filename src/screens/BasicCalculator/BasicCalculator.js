import React, { Component } from 'react';
import './BasicCalculator.scss';
import BasicBottomButtons from "../../components/BasicBottomButtons/BasicBottomButtons";
import Header from "../../components/Header/Header";
import Display from "../../components/Display/Display";
import {addValue, clearData} from "../../config/actions/BasicActions";
import {connect} from "react-redux";

class BasicCalculator extends Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return(
			<div className="Container">
				<Header/>
				<Display props={this.props}/>
				<BasicBottomButtons props={this.props}/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	addValue();
	return {
		basic: state.basic
	}
};

const mapDispatchToProps = {
	addValue,
	clearData
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicCalculator);