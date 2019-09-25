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
import {ARITHMETIC_SYMBOLS, calculatePercentage, calculateValues, removeSignedValue} from "../../config/utils/basicUtils";
import {DEFAULT_THEME_COLOR_BODY, DEFAULT_THEME_COLOR_HEADER} from "../../config/constants/globals";

class BasicCalculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			copied: false,
			result: false
		}
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
		} else if (value === 'Delete') {
			this.props.clearData();
		} else if (value === 'Backspace') {
			this.props.oneStepBackward();
		} else if (value === 'c') {
			if (this.props.displayHistory && this.props.displayHistory.includes('=')) {
				this.copyToClipboard(undefined, this.getResultText(this.props.displayHistory));
			} else {
				this.falseResult();
			}
		}
	};
	
	getResultText = (text) => {
		return /=(.+)/.exec(text)[1];
	};
	
	copyToClipboard = (e, text = this.props.displayHistory) => {
		if (text.length > 0) {
			navigator.clipboard.writeText(text).then(() => document.execCommand('copy'), () => this.falseResult());
			e !== undefined && e.target.focus();
			this.setState({copied: true});
			setTimeout(() => {
				this.setState({copied: false});
			}, 1000);
		} else {
			this.falseResult();
		}
	};
	
	falseResult = () => {
		this.setState({result: true});
		setTimeout(() => {
			this.setState({result: false});
		}, 1000);
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
				<Header themeColor={DEFAULT_THEME_COLOR_HEADER} routes={this.props.history}/>
				<Display props={this.props}
				         copied={this.state.copied}
				         result={this.state.result}
				         themeColor={DEFAULT_THEME_COLOR_HEADER}
				         copyToClipboard={this.copyToClipboard}
				/>
				<BasicBottomButtons props={this.props}
				                    onPercent={this.onPercent}
				                    onAddSymbol={this.onAddSymbol}
				                    onAddValue={this.onAddValue}
				                    onEqual={this.onEqual}
				                    themeColor={DEFAULT_THEME_COLOR_BODY}
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