import React,  { Component } from 'react';
import './index.css';
import Arrow from '../Arrow';
import TextArea from '../TextArea';
import ProfilePic from '../ProfilePic';

export default class NameCard extends Component {

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
		const text = "<React /> <Swift /> <Python /> <Java /> <C /> <C++ />"
		return (
			<div className="innercontent">
				<div className="namecard">
					<ProfilePic />
					<TextArea>
						<div className="foralign">
						This is Danny Chew.
						 <p className="details">A computer science + entrepreneur + videography + enthusiast.</p>
						<p> {text} </p>
						</div>
					</TextArea>
				</div>
				<div className="innercontent flexdown">
				<p>The recent project I have been working on: </p>
				<Arrow />
				</div>
			</div>
		);
	}

}

NameCard.propTypes = {

}

NameCard.defaultProps = {

}
