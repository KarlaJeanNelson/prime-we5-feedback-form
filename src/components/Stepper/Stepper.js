import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
});

class FeedbackStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
	};
	
	componentDidMount() {
		this.setState({
			currentStep: steps[this.state.activeStep]
		})
		console.log(this.state);
	}

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

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
						<FormControl component="fieldset">
							<RadioGroup
								name="name"
								aria-label="aria-label"
								row
							>
								<FormControlLabel value="1" label="1" control=
									{<Tooltip title="I feel lousy" placement="left">
										<Radio 
											icon={<MoodBadIcon />}
											checkedIcon={<RadioButtonCheckedIcon />}
										/>
									</Tooltip>}/>
								<FormControlLabel value="2" label="2" control={<Radio />} />
								<FormControlLabel value="3" label="3" control={<Radio />} />
								<FormControlLabel value="4" label="4" control={<Radio />} />
								<FormControlLabel value="5" label="5" control=
									{<Tooltip title="I feel stupendous!" placement="right">
										<Radio 
											icon={<MoodIcon />}
											checkedIcon={<RadioButtonCheckedIcon />}
										/>
									</Tooltip>}
								/>
							</RadioGroup>
						</FormControl>
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

export default withStyles(styles)(FeedbackStepper);