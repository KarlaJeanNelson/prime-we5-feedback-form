import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/Header';
// import Background from '../Background/Background'
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
			<Router>
				<div className="App">
					<CssBaseline />
					<Header />
					{/* <Background /> */}
					<Route exact path='/' component = {Home} />
					{/* <Route path='/pg1' component = {Feeling} /> */}
					{/* <Route path='/pg2' component = {Understanding} /> */}
					{/* <Route path='/pg3' component = {Support} /> */}
					{/* <Route path='/pg4' component = {Comments} /> */}
				</div>
			</Router>
    );
  }
}

export default App;
