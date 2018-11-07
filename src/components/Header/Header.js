import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
		fontFamily: "'Karla', sans-serif",
		fontSize: '2rem',
		fontWeight: 'bold',
		margin: theme.spacing.unit * 2
	}
});

class Header extends Component {
	state = {
		buttonText: 'admin view',
		buttonPath: '/admin'
	}

	buttonText = () => ( this.state.buttonText === 'admin logout'
		? 'admin view'
		: 'admin logout'
	)

	buttonPath = () => ( this.state.buttonPath === '/'
		? '/admin'
		: '/' )

	updateStore = () => {
		this.props.dispatch({
			type: 'CLEAR_STATE',
			submitted: 0,
		})
	}

	toggleView = () => {
		this.updateStore();
		this.setState({
			buttonText: this.buttonText(),
			buttonPath: this.buttonPath()
		})
	}

  render() {
		const { classes } = this.props;
    return (
			<header className={classes.root}>
				<AppBar position="fixed" color="secondary">
					<Toolbar>
						<IconButton>
							<MenuIcon />
						</IconButton>
						<Typography className={classes.title}>
							Feedback <ThumbsUpDownIcon /> Frenzy
						</Typography>
						<Button variant="contained" color="primary"
							component={Link} to={this.state.buttonPath}
							onClick={this.toggleView}
						>
							{this.state.buttonText}
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

export default connect()(withStyles(styles)(Header));