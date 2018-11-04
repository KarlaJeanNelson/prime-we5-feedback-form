import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import FeedbackIcon from '@material-ui/icons/Feedback';
import blue from '@material-ui/core/colors/blue';

const styles = theme => ({
  root: {
		flexGrow: 1,
	},
	grid: {
		alignItems: 'center',
		background: blue[100],
		justifyContent: 'center',
		minHeight: '88vh'
	},
	leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Home extends Component {
  render() {
		const { classes } = this.props;
    return (
			<div className={classes.root}>
				<Grid container className={classes.grid}>
					<Grid item xs={12}>
						<Button variant="contained" color="secondary" size="large">
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

export default withStyles(styles)(Home);