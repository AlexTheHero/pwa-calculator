import React, {Component} from 'react';
import BasicBottomButtons from "../../components/BasicBottomButtons/BasicBottomButtons";
import Header from "../../components/Header/Header";
import Display from "../../components/Display/Display";
import {
	addHistory,
	addSymbol,
	addValue,
	clearData,
	clearDisplayValue,
	makeHistory,
	makeSigned
} from "../../config/actions/BasicActions";
import {connect} from "react-redux";
import MainLayout from "../../components/MainLayout/MainLayout"

class BasicCalculator extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<MainLayout>
				<Header backgroundColor={"whitesmoke"}/>
				<Display props={this.props}/>
				<BasicBottomButtons props={this.props}/>
			</MainLayout>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		displayValue: state.basic.displayValue,
		displaySymbol: state.basic.displaySymbol,
		displayHistory: state.basic.displayHistory
	}
};

const mapDispatchToProps = {
	addValue,
	addSymbol,
	makeSigned,
	clearData,
	makeHistory,
	clearDisplayValue,
	addHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicCalculator);