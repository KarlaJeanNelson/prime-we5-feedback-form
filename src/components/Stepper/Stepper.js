import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Card, CardContent, CardActions } from '@material-ui/core';
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Tooltip } from '@material-ui/core';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import MoodIcon from '@material-ui/icons/Mood'
import steps from './StepperData'

const styles = theme => ({
  root: {
		flexGrow: 1,
	},
  button: {
    margin: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  textbox: {
		flexGrow: 1,
		width: '100%',
	},
});

const mapReduxStateToProps = reduxState => ({ reduxState })

class FeedbackStepper extends React.Component {
  state = {
		activeStep: 0,
		value: ''
	};
	
	getValue = (step) => {
		return !this.props.reduxState.feedbackApp[step] ? ''
			: this.props.reduxState.feedbackApp[step].value
	}

  handleNext = (e) => {
		e.preventDefault()
		this.handleDispatch()
    this.setState(state => ({
			activeStep: state.activeStep + 1,
			value: this.getValue(state.activeStep + 1)
		}));
  };

  handleBack = (e) => {
		e.preventDefault();
		this.handleDispatch();
    this.setState(state => ({
			activeStep: state.activeStep - 1,
			value: this.getValue(state.activeStep - 1)
		}));
	};
	
	handleDispatch = () => {
		this.props.dispatch({
			type: 'UPDATE_FEEDBACK',
			key: this.state.activeStep,
			value: {
				name: steps[this.state.activeStep].name,
				value: this.state.value,
			}
		})
	}

  handleReset = () => {
    this.setState({
			activeStep: 0,
			value: ''
    });
	};
	
	handleUpdate = (e) => {
		e.preventDefault();
		// console.log(`in handleUpdate`);
		this.setState({
			value: e.target.value
		})
	}

	componentDidMount() {
		this.setState({
			value: this.getValue(this.state.activeStep)
		})
		console.log(`in componentDidMount`);
	}

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
		// console.log(steps[this.state.activeStep])
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => {
            return (
              <Step key={index}>
                <StepLabel>{step.name}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
				<Card className={classes.card}>
					<CardContent>
						{activeStep === steps.length - 1 ? (
							<TextField
										className={classes.textbox}
										id="comments"
										label={steps[this.state.activeStep].message}
										placeholder="Karla is awesome!"
										margin="normal"
										multiline
										rows="4"
										variant="filled"
										onChange={this.handleUpdate}
									/>
						) : (
						<FormControl component="fieldset">
							<FormLabel component="legend">{steps[this.state.activeStep].message}</FormLabel>
							<RadioGroup
								name="radio-group"
								aria-label="radio-group"
								row
								onChange={this.handleUpdate}
								value={this.state.value}
							>
								<FormControlLabel value="1" label="1" control=
									{<Tooltip title={steps[this.state.activeStep].radioForm.leftAnchor} placement="left">
										<Radio 
											icon={<MoodBadIcon />}
											checkedIcon={<RadioButtonCheckedIcon />}
										/>
									</Tooltip>}/>
								<FormControlLabel value="2" label="2" control={<Radio />} />
								<FormControlLabel value="3" label="3" control={<Radio />} />
								<FormControlLabel value="4" label="4" control={<Radio />} />
								<FormControlLabel value="5" label="5" control=
									{<Tooltip title={steps[this.state.activeStep].radioForm.rightAnchor} placement="right">
										<Radio 
											icon={<MoodIcon />}
											checkedIcon={<RadioButtonCheckedIcon />}
										/>
									</Tooltip>}
								/>
							</RadioGroup>
						</FormControl>)}
					</CardContent>
					<CardActions>
						<div>
							{activeStep === steps.length ? (
								<div>
									<Typography className={classes.instructions}>
										All steps completed - you&quot;re finished
									</Typography>
									<Button onClick={this.handleReset} className={classes.button}>
										Reset
									</Button>
								</div>
							) : (
								<div>
									<div>
										<Button
											disabled={activeStep === 0}
											onClick={this.handleBack}
											className={classes.button}
										>
											Back
										</Button>
										<Button
											variant="contained"
											color="primary"
											onClick={this.handleNext}
											className={classes.button}
											disabled={this.state.value===''}
										>
											{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
										</Button>
									</div>
								</div>
							)}
						</div>
					</CardActions>
				</Card>
      </div>
    );
  }
}

FeedbackStepper.propTypes = {
  classes: PropTypes.object,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(FeedbackStepper));