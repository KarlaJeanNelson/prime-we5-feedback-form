import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import FeedbackIcon from '@material-ui/icons/Feedback';
import blue from '@material-ui/core/colors/blue';

const styles = theme => ({
  root: {
		flexGrow: 1,
	},
	grid: {
		alignContent: 'center',
		alignItems: 'center',
		background: blue[100],
		justify: 'center',
		minHeight: '88vh'
	},
	leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

const mapReduxStateToProps = (reduxState) => ({ reduxState })

class Home extends Component {

	goToNext = (e) => {
		e.preventDefault();
		// console.log(this.props);
		this.props.history.push(this.state.nextPage)
	}

	componentWillMount() {
		// console.log(`componentDidMount`, this.state, this.props.feedbackApp);
		this.props.dispatch({
			type: 'SET_STATE',
			message: 'Welcome to Feedback Frenzy!',
			nextPage: '/pg1'
		})
	}

  render() {
		const { classes } = this.props;
		console.log(this.props);
    return (
			<div className={classes.root}>
				<Grid container className={classes.grid}>
					<Grid item>
						<Typography>{this.state.message}</Typography>
						<Button
							variant="contained"
							color="secondary"
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