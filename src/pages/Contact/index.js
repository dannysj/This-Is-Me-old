import React,  { Component } from 'react';
import './index.css';
import ProfilePic from '../../components/ProfilePic';
import Button from '../../components/Button';

export default class Contact extends Component {

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
			<div className="contents">
				<div className="profile"><ProfilePic /></div>
				<p>Say Hi <i className="fa fa-hand-spock-o" aria-hidden="true"></i> to me!</p>
				<div className="buttons">
					<div className=" buttonplace"><a href="https://www.linkedin.com/in/shi-ji-chew-9a8067139/"><Button circle={true} ><i className="fa fa-linkedin" aria-hidden="true"></i></Button></a></div>
					<div className=" buttonplace"><a href="mailto:schew2@wisc.edu?subject=Hello There"><Button circle={true} ><i className="fa fa-envelope-o" aria-hidden="true"></i></Button></a></div>
					<div className=" buttonplace"><a href="https://www.youtube.com/channel/UCWTW6GgGwedDB7DNFEMssUw"><Button circle={true} ><i className="fa fa-youtube-play" aria-hidden="true"></i></Button></a></div>
				</div>
			</div>

		);
	}

}

Contact.propTypes = {

}

Contact.defaultProps = {

}
