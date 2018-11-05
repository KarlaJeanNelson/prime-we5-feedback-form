import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
// import HomeIcon from '@material-ui/icons/Home';
// import ViewListIcon from '@material-ui/icons/ViewList';

const styles = theme => ({
  root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		fontFamily: "'share tech mono', sans-serif",
		fontSize: '2rem',
		fontWeight: 'bold',
		margin: theme.spacing.unit * 2
	}
});

class Header extends Component {
	buttonText = () => ( window.location.hash !== '#/admin' ? 'admin view' : 'admin logout' )	
	buttonPath = () => ( window.location.hash !== '#/admin' ? '/admin' : '/')
	// buttonIcon = () => ( window.location.hash !== '#/admin'
	// ? <ViewListIcon className={classes.leftIcon} />
	// : <HomeIcon className={classes.leftIcon} />)

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
						<Button variant="contained" color="secondary"
							component={Link} to={this.buttonPath()}>
							{/* {this.buttonIcon()} */}
							{this.buttonText()}
						</Button>
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