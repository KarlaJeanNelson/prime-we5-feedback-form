import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import red from '@material-ui/core/colors/red';
import AdminListItem from '../AdminListItem/AdminListItem';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
		padding: theme.spacing.unit * 2,
	},
	delete: {
		color: red[900],
	}
});

const mapReduxStateToProps = (reduxState) => ({ reduxState })

class Admin extends Component {
	// Clear redux state when Admin view entered
	componentWillMount() {
		console.log(this.props);
		this.props.dispatch({
			type: 'CLEAR_STATE',
		})
	}

	componentDidMount() {
		this.getFeedback();
	}
	
	// Get feedback list from the database and send to redux store
	getFeedback = () => {
		axios({
			method: 'GET',
			url: '/feedback',
		})
		.then((result) => {
			console.log(`GET from database successful!`, result);
			this.props.dispatch({
				type: 'LIST_FEEDBACK',
				payload: result.data
			})
		})
		.catch((error) => {
			alert(`UH OH! Something went wrong!`)
			console.log(`GET error`, error);
		})
	}

	render() {
		const { classes } = this.props;
		// console.log(this.state);
		return (
			<Grid container className={classes.root}>
				<Grid item xs={12}>
					<Card className={classes.paper}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Date</TableCell>
									<TableCell>Feeling</TableCell>
									<TableCell>Understanding</TableCell>
									<TableCell>Support</TableCell>
									<TableCell>Comments</TableCell>
									<TableCell>Flag for Follow Up</TableCell>
									<TableCell>Delete</TableCell>
								</TableRow>
							</TableHead>
							<AdminListItem />
						</Table>
					</Card>
				</Grid>
			</Grid>
		);
	}
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(Admin));