import React, { Component } from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { blue } from '@material-ui/core/colors'
import Header from '../Header/Header';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling'
import './App.css';

const styles = theme => ({
  root: {
		flexGrow: 1,
	},
	bg: {
		background: blue[100],
		display: 'flex',
		flexGrow: 1,
		alignItems: 'center',
		justify: 'center',
		minHeight: '80vh',
		padding: theme.spacing.unit * 2,
	},
	leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class App extends Component {
  render() {
		const { classes } = this.props
    return (
			<Router>
				<div className={classes.root}>
					<CssBaseline />
					<Header />
					<Grid container className={classes.bg}>
						<Grid item sm={2}></Grid>
						<Grid item xs={12} sm={8}>
							<Route exact path='/' component = {Home} />
							<Route path='/pg1' component = {Feeling} />
							{/* <Route path='/pg2' component = {Understanding} /> */}
							{/* <Route path='/pg3' component = {Support} /> */}
							{/* <Route path='/pg4' component = {Comments} /> */}
						</Grid>
						<Grid item sm={2}></Grid>
					</Grid>
				</div>
			</Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
