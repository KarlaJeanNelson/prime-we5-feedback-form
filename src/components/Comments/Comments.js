import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, CardActions } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
		padding: theme.spacing.unit * 2,
	},
  textbox: {
		flexGrow: 1,
		width: '100%',
	},
});

const mapReduxStateToProps = (reduxState) => ({ reduxState })

// Set state and then retrieve it to display message
// I realize now that this doesn't really make sense,
// but I was fiddling with ways to have fewer pages to render
class Comments extends Component {
	componentWillMount() {
		console.log(this.props);
		this.props.dispatch({
			type: 'SET_STATE',
			message: 'Please leave some comments!',
			nextPage: '/done',
		});
		this.setState({
			comments: ''
		})
	}

	handleChange = (e) => {
		e.preventDefault()
		this.setState({
			comments: e.target.value
		})
	}

	submitFeedback = (e) => {
		e.preventDefault();
		this.props.dispatch({
			type: 'SET_COMMENTS',
			comments: this.state.comments
		})
		this.writeToDb()
		this.clearReduxState()
		// console.log(this.props);		
		this.props.history.push(this.props.reduxState.feedbackApp.nextPage)
	}

	writeToDb = () => {
		axios({
			method: 'POST',
			url: '/feedback',
			data: this.props.reduxState.feedbackApp
		})
		.then((results) => {
			console.log(`POST to database successful!`, results);
		})
		.catch((error) => {
			alert(`UH OH! Something went wrong!`)
			console.log(error);
		})
	}

	clearReduxState = () => {
		this.props.dispatch({
			type: 'CLEAR_STATE',
		})
	}

	render() {
		const { classes } = this.props;
		// console.log(this.state);
		return (
			<Grid container className={classes.root}>
				<Grid item xs={12}>
					<Card className={classes.paper}>
						<CardContent>
								<FormLabel component="legend">{this.props.reduxState.feedbackApp.message}</FormLabel>
								<TextField
									className={classes.textbox}
									id="comments"
									placeholder="Karla is awesome!"
									margin="normal"
									multiline
									rows="4"
									variant="outlined"
									onChange={this.handleChange}
								/>
						</CardContent>
						<CardActions>
							<Button variant="contained" color="secondary"
								disabled={this.state.comments===''}
								onClick={this.submitFeedback}>
									Submit
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		);
	}
}

Comments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(Comments));