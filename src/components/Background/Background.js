import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

const styles = theme => ({
  root: {
		flexGrow: 1,
	},
	grid: {
		alignItems: 'center',
		background: blue[800],
		justifyContent: 'center',
		minHeight: '88vh'
	},
});

class Background extends Component {

  render() {
		const { classes } = this.props;
    return (
			<div className={classes.root}>
				<Grid container className={classes.grid}>
					<Grid item xs={12}>
					</Grid>
				</Grid>
			</div>
    );
  }
}

Background.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Background);