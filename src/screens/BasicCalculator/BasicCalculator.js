import React, {Component} from 'react';
import BasicBottomButtons from "../../components/BasicBottomButtons/BasicBottomButtons";
import Header from "../../components/Header/Header";
import Display from "../../components/Display/Display";
import {addValue, addSymbol, clearData, makeSigned} from "../../config/actions/BasicActions";
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
				<Header/>
				<Display props={this.props}/>
				<BasicBottomButtons props={this.props}/>
			</MainLayout>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	addValue();
	return {
		displayValue: state.basic.displayValue,
		displaySymbol: state.basic.displaySymbol
	}
};

const mapDispatchToProps = {
	addValue,
	addSymbol,
	makeSigned,
	clearData
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicCalculator);