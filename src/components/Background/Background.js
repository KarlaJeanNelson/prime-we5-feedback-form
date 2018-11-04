import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
		flexGrow: 1,
	},
});

class Background extends Component {
  render() {
		const { classes } = this.props;
    return (
			<div className={classes.root}>
				<img src="./bg-image.jpg" />
			</div>
    );
  }
}

Background.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Background);