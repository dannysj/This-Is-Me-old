import React,  { Component } from 'react';
import './index.css';
import NameCard from '../../components/NameCard';
import Projects from '../Projects';
import Contact from '../Contact';

export default class Home extends Component {

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
        <div className="content-test">
          <NameCard />
          <Projects />
          <Contact />
        </div>
		);
	}

}

Home.propTypes = {

}

Home.defaultProps = {

}
