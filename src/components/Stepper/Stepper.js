import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
		flexGrow: 1,
		textAlign: 'center',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Feeling', 'Comprehension', 'Support', 'Comments'];
}

class FeedbackStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
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


  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
				<Grid container>
					<Grid item sm={2}></Grid>
					<Grid item xs={12} sm={8}>
						<Stepper activeStep={activeStep}>
							{steps.map((label, index) => {
								const props = {};
								const labelProps = {};
								return (
									<Step key={label} {...props}>
										<StepLabel {...labelProps}>{label}</StepLabel>
									</Step>
								);
							})}
						</Stepper>
					</Grid>
					<Grid item sm={2}></Grid>
				</Grid>
			</div>
    );
  }
}

FeedbackStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(FeedbackStepper);
