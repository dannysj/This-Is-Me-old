import React,  { Component } from 'react';
import './index.css';
import Timeline from './Timeline';
import Phone from '../Phone';

export default class Post extends Component {

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
		const {image} = this.props;
		return (
				<div className="container">
					<div className="summary">
						<div className="date">
							<p>August 27, 2017</p>
						</div>
						<div className="title">
						  <p>In Search for Better Learning System</p>
						</div>
						<p className="psummary">
						The purpose of this project is to encourage students to rethink what they’ve learnt in class and reconstruct their knowledge to become a tool to a problem. The current education system has done a good job in providing detailed knowledge to students, and I always wanted to hope for something better - something that is able to prepare students like me to become knowledge workers.
						</p>
					</div>
					<div className="phone">
					<Phone image={image}/>
					</div>
				</div>
		);
	}

}

Post.propTypes = {

}

Post.defaultProps = {

}
