import React,  { Component } from 'react';
import './index.css';

export default class Button extends Component {

	componentWillReceiveProps(nextProps) {
			// update prop cycle
	}

	shouldComponentUpdate(nextProps, nextState) {
		// default to true, but can overwrite
	}

	componentWillUpdate(nextProps, nextState) {
		//refresh logo activated
		//then re-render contents
	}

	componentDidUpdate(prevProps, prevState) {

	}


	constructor(props) {
		super(props);

		// equivalent to getInitialState() { return {}; }
		this.state = {

		}


	}

	render(){
		const {circle} = this.props
		return (
			<div className={ circle ? "button-circle" : "button"}>
			<p>{this.props.children}</p>
			</div>
		);
	}

}

Button.propTypes = {

}

Button.defaultProps = {

}
