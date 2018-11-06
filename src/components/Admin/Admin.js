import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import red from '@material-ui/core/colors/red';

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
		this.clearReduxState();
	}

	componentDidMount() {
		this.getFeedback();
	}

	clearReduxState = () => {
		this.props.dispatch({
			type: 'CLEAR_STATE',
		})
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

	deleteFeedback = (id) => {
		const confirm = window.confirm(`Are you sure you want to delete this feedback item?`);
		if (confirm) {
			axios({
				method: 'DELETE',
				url: `/feedback/${id}`
			})
			.then((result) => {
				this.getFeedback();
			})			
			.catch((error) => {
				alert('UH OH! Something went wrong while deleting that record!');
				console.log(`Delete error:`, error);
			})
		}
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
							<TableBody>
									{this.props.reduxState.adminList.map((feedback) => (
										<TableRow key={feedback.id}>
											<TableCell>{feedback.date}</TableCell>
											<TableCell>{feedback.feeling}</TableCell>
											<TableCell>{feedback.understanding}</TableCell>
											<TableCell>{feedback.support}</TableCell>
											<TableCell>{feedback.comments}</TableCell>
											<TableCell>
												<Checkbox />
											</TableCell>
											<TableCell>
												<Button variant="fab" mini className={classes.delete}
													onClick={() => this.deleteFeedback(feedback.id)}>
													<DeleteIcon />
												</Button>
											</TableCell>
										</TableRow>
									))}
							</TableBody>
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