import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
// import { Grid } from '@material-ui/core';
import Image from '../Background/jon-tyson-520955-unsplash.jpg'

const styles = theme => ({
  root: {
		flexGrow: 1,
	},
	container: {
		backgroundImage: `url(${Image})`,
		minHeight: '100vh'
},
});

class Background extends Component {
	state = {
		imgs: [],
		loadingState: true
	}
	
  render() {
		const { classes } = this.props;
		// console.log(this.props);
    return (
			<div className={classes.root}>
				<Paper className={classes.container}>
					test
				</Paper>
			</div>
    );
  }
}

Background.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Background);