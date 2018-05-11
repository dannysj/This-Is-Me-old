import React, { Component } from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './assets/fonts/fa/css/font-awesome.min.css';

var textStyle = {
	color: '#aaa',
	textDecoration: 'none',
};


class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="card">
                <div className="navbar">
                <ul>
                  <li><Link to="/" style={textStyle} >Home</Link></li>
                  <li><Link to="/projects" style={textStyle} >Projects</Link></li>
                  <li><Link to="/contact" style={textStyle} >Contact</Link></li>

                </ul>
                </div>

              <div className="content">
	              <Switch>
	                <Route exact path={"/" } component={Home}/>
	                <Route path="/projects" component={Projects} />
	                <Route path="/contact" component={Contact} />
	              </Switch>
              </div>
          </div>
          <footer className="footer">
             <p> Created by Danny Chew with <i className="fa fa-coffee" aria-hidden="true"></i> and <i className="fa fa-github" aria-hidden="true">  </i>  <i className="fa fa-copyright" aria-hidden="true"></i> 2017</p>
          </footer>
        </div>
    );
  }
}

export default App;
