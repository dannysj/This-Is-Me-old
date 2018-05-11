import React,  { Component } from 'react';
import './index.css';


export default class TextArea extends Component {

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
		return (
			<div className="textarea">
				{this.props.children}
			</div>
		);
	}

}

TextArea.propTypes = {

}

TextArea.defaultProps = {

}
