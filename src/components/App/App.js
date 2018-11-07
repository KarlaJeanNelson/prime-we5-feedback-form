import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';
// import FeedbackStepper from '../Stepper/Stepper';
import Background from '../Background/Background';
import './App.css';

const styles = theme => ({
  root: {
		flexGrow: 1,
	},
	container: {
		flexGrow: 1,
		background: theme.palette.primary[100],
		minHeight: '101vh',
		padding: theme.spacing.unit * 2,
		paddingTop: theme.spacing.unit * 12,
	},
	item: {
		minHeight: '101vh' - theme.spacing.unit * 10,
	}
});

class App extends Component {
  render() {
		const { classes } = this.props
    return (
			<Router>
				<div className={classes.root}>
					<Grid container className={classes.container} spacing={16}>
						<Grid item xs={12} className={classes.item}>
							<CssBaseline />
							<Header />
							<Route exact path='/' component = {Home} />
							<Route path='/feeling' component = {Feeling} />
							<Route path='/understanding' component = {Understanding} />
							<Route path='/support' component = {Support} />
							<Route path='/comments' component = {Comments} />
							<Route path='/thankyou' component = {ThankYou} />
							<Route path='/admin' component = {Admin} />
							<Route path='/test' component = {Background} />
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
