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
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import TopSpacer from '../TopSpacer/TopSpacer';

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

const mapReduxStateToProps = (reduxState) => ({ reduxState })

class Support extends Component {
	componentWillMount() {
		console.log(this.props);
		this.props.dispatch({
			type: 'SET_STATE',
			message: 'How supported do you feel?',
			nextPage: '/comments',
		});
	}

	handleChange = (e) => {
		e.preventDefault()
		this.props.dispatch({
			type: 'SET_SUPPORT',
			support: e.target.value
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
			<div className={classes.root}>
				<TopSpacer />
				<Grid container className={classes.root} spacing={16}>
					<Grid item sm={2}></Grid>
					<Grid item xs={12} sm={8}>
						<Card className={classes.paper}>
							<CardContent>
								<FormControl component="fieldset">
									<FormLabel component="legend">{this.props.reduxState.feedbackApp.message}</FormLabel>
									<RadioGroup
										name="feeling"
										aria-label="feeling"
										value={this.props.reduxState.feedbackApp.support}
										onChange={this.handleChange}
										row>
											<FormControlLabel value="1" label="1" control=
												{<Radio 
													icon={<MoodBadIcon />}
													checkedIcon={<RadioButtonCheckedIcon />}
												/>} />
											<FormControlLabel value="2" label="2" control={<Radio />} />
											<FormControlLabel value="3" label="3" control={<Radio />} />
											<FormControlLabel value="4" label="4" control={<Radio />} />
											<FormControlLabel value="5" label="5" control=
												{<Radio 
													icon={<MoodIcon />}
													checkedIcon={<RadioButtonCheckedIcon />}
												/>} />
									</RadioGroup>
								</FormControl>
							</CardContent>
							<CardActions>
								<Button variant="contained" color="primary"
									disabled={!this.props.reduxState.feedbackApp.support}
									onClick={this.goToNext}>
										Next
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item sm={2}></Grid>
				</Grid>
			</div>
		);
	}
}

Support.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(Support));