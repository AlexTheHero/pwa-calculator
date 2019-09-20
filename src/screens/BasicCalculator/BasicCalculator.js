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
	makeSigned,
	oneStepBackward
} from "../../config/actions/BasicActions";
import {connect} from "react-redux";
import MainLayout from "../../components/MainLayout/MainLayout";
import {ARITHMETIC_SYMBOLS, calculatePercentage, calculateValues, removeSignedValue} from "../../config/utils/utils";

class BasicCalculator extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		document.addEventListener('keydown', (e) => this.handleTyping(e.key))
	}
	
	componentWillUnmount() {
		document.addEventListener('keydown', (e) => this.handleTyping(e.key))
	}
	
	handleTyping = (value) => {
		if (value.toString().match(/([1234567890])/g)) {
			this.onAddValue(value);
		} else if (value.toString().match(ARITHMETIC_SYMBOLS)) {
			if (value === '/') {
				this.onAddSymbol('÷');
				return;
			} else if (value === '*') {
				this.onAddSymbol('x');
				return;
			}
			
			this.onAddSymbol(value);
		} else if (value === '=') {
			this.onEqual();
		} else if (value === '%') {
			this.onPercent();
		}
	};
	
	onAddValue = (number) => {
		let {props} = this;
		
		if (props.displayValue && props.displayValue.length > 10) {
			return;
		}
		if (number === 0 && props.displayValue === "0") {
			return;
		} else if (number === 0 && props.displayHistory === null && props.displayValue === null) {
			props.addValue(number);
			return;
		} else if (number !== 0 && props.displayValue === "0" && number !== ".") {
			props.clearDisplayValue("displayValue");
			props.addValue(number);
			return;
		}
		
		if (number === ".") {
			if (props.displayValue === null) return;
			if (props.displayValue.includes(".")) return;
		}
		
		props.addValue(number);
	};
	
	onAddSymbol = (symbol) => {
		let {props} = this;
		
		if (props.displayHistory !== null && props.displayHistory.includes('=')) {
			if (props.displayValue !== null) {
				props.clearDisplayValue('displayHistory');
				props.makeHistory();
				props.clearDisplayValue('displayValue');
				props.addSymbol(symbol);
			}
			return;
		} else if (props.displayHistory !== null && props.displayValue === null) {
			if (props.displayHistory.length > 1) {
				props.addSymbol(symbol);
			}
			return;
		} else if (props.displayHistory === null && props.displayValue === null) {
			return;
		}
		
		props.makeHistory();
		props.clearDisplayValue();
		props.addSymbol(symbol);
	};
	
	handleSignedValues = () => {
		let {props} = this;
		let checkedValues = '';
		
		if (props.displaySymbol === '-') {
			if (props.displayValue[0] === '-') {
				checkedValues = props.displayHistory + " + " + props.displayValue.slice(2);
			} else {
				checkedValues = props.displayHistory + " - " + props.displayValue;
			}
		} else if (props.displaySymbol === '+') {
			if (props.displayValue[0] === '-') {
				checkedValues = props.displayHistory + props.displayValue;
			} else {
				checkedValues = props.displayHistory + props.displaySymbol + ' ' + props.displayValue;
			}
		} else {
			checkedValues = props.displayHistory + props.displaySymbol + ' ' + props.displayValue;
		}
		
		return checkedValues;
	};
	
	onEqual = () => {
		let {props} = this;
		
		if (props.displayHistory === null || props.displaySymbol === null) return;
		if (props.displayValue === null && !props.displayHistory.match(ARITHMETIC_SYMBOLS)) return;
		
		const valuesToProcess = props.displayValue !== null ? this.handleSignedValues(props) : props.displayHistory;
		let calculatedValue = calculateValues(valuesToProcess);
		
		if (props.displayValue !== null) {
			props.addHistory(`${props.displayValue} = ${calculatedValue}`);
		} else {
			props.clearDisplayValue();
			props.addHistory(` = ${calculatedValue}`);
		}
		
		props.clearDisplayValue();
	};
	
	onPercent = () => {
		let {props} = this;
		
		if (props.displaySymbol !== null && props.displayHistory === null) {
			return;
		}
		if (props.displayValue === null) {
			return;
		}
		if (props.displaySymbol === null) {
			let newValue = removeSignedValue(props.displayValue);
			let operatedPercent = calculatePercentage(Number(newValue));
			props.clearData();
			props.addHistory(`${newValue}% = ${operatedPercent}`);
			
			return;
		}
		if (props.displayValue.includes('(')) {
			props.addHistory(`${props.displayValue.replace(')', '%) ')}`);
			props.clearDisplayValue('displayValue');
			return;
		}
		
		props.addHistory(`${props.displayValue}% `);
		props.clearDisplayValue('displayValue');
	};
	
	render() {
		return (
			<MainLayout>
				<Header backgroundColor={"whitesmoke"} routes={this.props.history}/>
				<Display props={this.props}/>
				<BasicBottomButtons props={this.props}
				                    onPercent={this.onPercent}
				                    onAddSymbol={this.onAddSymbol}
				                    onAddValue={this.onAddValue}
				                    onEqual={this.onEqual}
				/>
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
	addHistory,
	oneStepBackward
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicCalculator);