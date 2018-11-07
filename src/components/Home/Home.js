import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import TopSpacer from '../TopSpacer/TopSpacer';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FeedbackIcon from '@material-ui/icons/Feedback';


const styles = theme => ({
  root: {
		flexGrow: 1,
	},
	container: {
		flexGrow: 1,
		justify: 'center',
	},
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
	},
	leftIcon: {
    marginRight: theme.spacing.unit,
	},
	content: {
		textAlign: 'center',
	}
});

const mapReduxStateToProps = (reduxState) => ({ reduxState })

const vars = {
	false: {
		message: 'Thank you for your feedback!',
		buttonText: 'Leave Feedback'
	},
	true: {
		message: 'Welcome to Feedback Frenzy!',
		buttonText: 'Leave New Feedback'
	}
}

const formVars = () => {
	return vars[this.props.reduxState.feedbackApp.submitted]
}

class Home extends Component {
	state = {
		open: false,
		date: moment().format('YYYY-MM-DD'),
  };

  handleClickOpen = () => {
    this.setState({ open: true });
	};
	
	handleChange = (e) => {
		this.setState({ date: e.target.value})
	}

  handleClose = () => {
    this.setState({ open: false });
	};
	
	handleOK = (e) => {
		e.preventDefault();
		this.handleClose();
		this.props.dispatch({
			type: 'SET_DATE',
			date: this.state.date
		})
		this.props.dispatch({
			type: 'UPDATE_STATE',
			key: 'date',
			value: this.state.date
		})
		this.goToNext(e);
	}

	// Go to next page when the "next" button is clicked
	goToNext = (e) => {
		// console.log(this.props);
		this.props.history.push(this.props.reduxState.feedbackApp.nextPage)
	}
	
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
							onClick={this.handleClickOpen}>
								<FeedbackIcon className={classes.leftIcon}/>
								Leave Feedback
						</Button>
						<Dialog
							open={this.state.open}
							onClose={this.handleClose}
							aria-labelledby="choose-date"
						>
							<DialogTitle id="choose-date">Leave feedback for ...</DialogTitle>
							<DialogContent>
								<form className={classes.container} noValidate>
									<TextField
										id="date"
										label="Date"
										type="date"
										className={classes.textField}
										InputLabelProps={{
											shrink: true,
										}}
										onChange={this.handleChange}
										value={this.state.date}
									/>
								</form>
							</DialogContent>
							<DialogActions>
								<Button onClick={this.handleClose} color="primary" variant="contained">
									Cancel
								</Button>
								<Button onClick={this.handleOK} color="primary" variant="contained">
									OK
								</Button>
							</DialogActions>
						</Dialog>
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