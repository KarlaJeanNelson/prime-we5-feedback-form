import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { blue } from '@material-ui/core/colors'
import Header from '../Header/Header';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';
// import FeedbackStepper from '../Stepper/Stepper'
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
					{/* <FeedbackStepper /> */}
					<Grid container className={classes.bg}>
						<Grid item xs={12}>
							<Route exact path='/' component = {Home} />
							<Route path='/pg1' component = {Feeling} />
							<Route path='/pg2' component = {Understanding} />
							<Route path='/pg3' component = {Support} />
							<Route path='/pg4' component = {Comments} />
							<Route path='/done' component = {ThankYou} />
							<Route path='/admin' component = {Admin} />
						</Grid>
					</Grid>
				</div>
			</Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(App));
