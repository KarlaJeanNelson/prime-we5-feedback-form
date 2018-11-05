import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, CardActions } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
// import MoodIcon from '@material-ui/icons/Mood';
// import MoodBadIcon from '@material-ui/icons/MoodBad';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
		padding: theme.spacing.unit * 2,
	},
  control: {
    padding: theme.spacing.unit * 2,
	},
});

// const initialState = {
// 	message: 'How are you feeling?',
// 	nextPage: '/pg2',
// 	feeling: 0,
// }

const mapReduxStateToProps = (reduxState) => ({ reduxState })

class Feeling extends Component {
	componentWillMount() {
		console.log(this.props);
		this.props.dispatch({
			type: 'SET_STATE',
			message: 'How are you feeling?',
			nextPage: '/pg2',
		});
	}

	handleChange = (e) => {
		e.preventDefault()
		this.props.dispatch({
			type: 'SET_FEELING',
			feeling: e.target.value
		})
		this.setState({})
	}

	goToNext = (e) => {
		e.preventDefault();
		// console.log(this.props);
		this.props.history.push(this.props.reduxState.feedbackApp.nextPage)
	}

	render() {
		const { classes } = this.props;
		// console.log(this.state);
		return (
			<Grid container className={classes.root}>
				<Grid item xs={12}>
					<Card className={classes.paper}>
						<CardContent>
							<FormControl component="fieldset">
								<FormLabel component="legend">{this.props.reduxState.feedbackApp.message}</FormLabel>
								<RadioGroup
									name="feeling"
									aria-label="feeling"
									value={this.props.reduxState.feedbackApp.feeling}
									onChange={this.handleChange}
									row>
										<FormControlLabel value="1" control={<Radio />} label="1" />
										<FormControlLabel value="2" control={<Radio />} label="2" />
										<FormControlLabel value="3" control={<Radio />} label="3" />
										<FormControlLabel value="4" control={<Radio />} label="4" />
										<FormControlLabel value="5" control={<Radio />} label="5" />
								</RadioGroup>
							</FormControl>
						</CardContent>
						<CardActions>
							<Button variant="contained" color="secondary"
								disabled={this.props.reduxState.feedbackApp.feeling===0}
								onClick={this.goToNext}>
									Next
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		);
	}
}

Feeling.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(Feeling));