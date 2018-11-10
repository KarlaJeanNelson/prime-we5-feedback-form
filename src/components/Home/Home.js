import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import FeedbackIcon from '@material-ui/icons/Feedback';
import TopSpacer from '../TopSpacer/TopSpacer';

const styles = theme => ({
  root: {
		flexGrow: 1,
	},
	container: {
		flexGrow: 1,
		justify: 'center',
},
	leftIcon: {
    marginRight: theme.spacing.unit,
	},
	content: {
		textAlign: 'center',
	}
});

const mapReduxStateToProps = (reduxState) => ({ reduxState })

class Home extends Component {

	// Set state and then retrieve it to display message
	// I realize now that this doesn't really make sense,
	// but I was fiddling with ways to have fewer pages to render
	componentWillMount() {
		this.props.dispatch({
			type: 'SET_STATE',
			message: 'Welcome to Feedback Frenzy!',
			nextPage: '/feeling'
		})
	}

	// Go to next page when the "next" button is clicked
	goToNext = (e) => {
		e.preventDefault();
		// console.log(this.props);
		this.props.history.push(this.props.reduxState.feedbackApp.nextPage)
	}

  render() {
		const { classes } = this.props;
		console.log(this.props);
    return (
			<div className={classes.root}>
				<TopSpacer />
				<Grid container className={classes.container} spacing={16}>
					<Grid item xs={12} className={classes.content}>
						<FormLabel>{this.props.reduxState.feedbackApp.message}</FormLabel>
					</Grid>
					<Grid item xs={12} className={classes.content}>
						<Button
							variant="contained"
							color="primary"
							size="large"
							onClick={this.goToNext}>
								<FeedbackIcon className={classes.leftIcon}/>
								Leave Feedback
						</Button>
					</Grid>
				</Grid>
			</div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(Home));