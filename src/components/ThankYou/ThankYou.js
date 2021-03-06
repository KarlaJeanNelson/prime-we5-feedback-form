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
	leftIcon: {
    marginRight: theme.spacing.unit,
	},
	content: {
		textAlign: 'center'
	}
});

const mapReduxStateToProps = (reduxState) => ({ reduxState })

class ThankYou extends Component {

	goToNext = (e) => {
		e.preventDefault();
		// console.log(this.props);
		this.props.history.push(this.props.reduxState.feedbackApp.nextPage)
	}

	componentWillMount() {
		this.props.dispatch({
			type: 'SET_STATE',
			message: 'Thank you for your feedback!',
			nextPage: '/feeling'
		})
	}

  render() {
		const { classes } = this.props;
		console.log(this.props);
    return (
			<div className={classes.root}>
				<TopSpacer />
				<Grid container spacing={16}>
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
								Leave New Feedback
						</Button>
					</Grid>
				</Grid>
			</div>
    );
  }
}

ThankYou.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(ThankYou));