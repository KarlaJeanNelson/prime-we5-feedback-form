import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

const styles = theme => ({
  root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		fontSize: '2rem',
		fontWeight: 'bold',
		margin: theme.spacing.unit * 2
	}
});

class Header extends Component {
  render() {
		const { classes } = this.props;
		// console.log(window.location.hash);
    return (
			<header className={classes.root}>
				<AppBar position="sticky" color="primary">
					<Toolbar>
						<IconButton>
							<MenuIcon />
						</IconButton>
						<Typography className={classes.title}>
							Feedback <ThumbsUpDownIcon /> Frenzy
						</Typography>
					</Toolbar>
				</AppBar>
			</header>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);