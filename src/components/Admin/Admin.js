import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FlagIcon from '@material-ui/icons/Flag';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
		padding: theme.spacing.unit * 2,
	},
	delete: {
		color: red,
	}
});

const mapReduxStateToProps = (reduxState) => ({ reduxState })

class Admin extends Component {
	// Clear redux state when Admin view entered
	componentWillMount() {
		console.log(this.props);
		this.clearReduxState();
	}

	clearReduxState = () => {
		this.props.dispatch({
			type: 'CLEAR_STATE',
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
							<TableBody>
									{this.props.reduxState.adminList.map((feedback) => (
										<TableRow key={feedback.id}>
											<TableCell>{feedback.date}</TableCell>
											<TableCell>{feedback.feeling}</TableCell>
											<TableCell>{feedback.understanding}</TableCell>
											<TableCell>{feedback.support}</TableCell>
											<TableCell>{feedback.comments}</TableCell>
											<TableCell>
												<IconButton>
													<FlagIcon />
												</IconButton>
											</TableCell>
											<TableCell>
												<Button variant="fab" mini className={classes.delete}>
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