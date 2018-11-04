import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Feeling extends Component {
	render() {
		const { classes } = this.props;

		<Grid container className={classes.root}>
			<Grid item xs={12}>
				<Paper className={classes.control}>
					<Grid container>
						<Grid item>
							<FormLabel>spacing</FormLabel>
							<RadioGroup
								name="spacing"
								aria-label="Spacing"
								value={spacing}
								onChange={this.handleChange('spacing')}
								row
							>
								<FormControlLabel value="0" control={<Radio />} label="0" />
								<FormControlLabel value="8" control={<Radio />} label="8" />
								<FormControlLabel value="16" control={<Radio />} label="16" />
								<FormControlLabel value="24" control={<Radio />} label="24" />
								<FormControlLabel value="32" control={<Radio />} label="32" />
								<FormControlLabel value="40" control={<Radio />} label="40" />
							</RadioGroup>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	}