import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  root: {
    flexGrow: 1,
	},
	container: {
		justify: 'center',
	},
	item: {
		height: '20vh',
		maxHeight: theme.spacing.unit * 10,
	},
});

class TopSpacer extends Component {
	render() {
		const { classes } = this.props;
		// console.log(this.state);
		return (
			<div className={classes.root}>
				<Hidden only="xs">
					<Grid container spacing={16} className={classes.container}>
						<Grid item className={classes.item}></Grid>
					</Grid>
				</Hidden>
			</div>
		);
	}
}

TopSpacer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopSpacer);