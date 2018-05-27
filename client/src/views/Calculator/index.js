import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`
  },
  item: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    width: 200,
    margin: `${theme.spacing.unit}px 0`
  },
  select: {
    width: 200
  },
  group: {
    width: '50%',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`
  },
  radioGroup: {
    flexDirection: 'row'
  }
});

class Calculator extends Component {
  state = {
    gender: 'male',
    activityLevel: '',
    dietaryGoal: ''
  };

  handleGenderChange = e => {
    const { value } = e.target;
    this.setState(state => ({ ...state, gender: value }));
  };

  handleActivityLevelChange = e => {
    const { value } = e.target;
    this.setState(state => ({ ...state, activityLevel: value }));
  };

  handleDietaryGoalChange = e => {
    const { value } = e.target;
    this.setState({ dietaryGoal: value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12} className={classes.item}>
          <Typography variant="headline" gutterBottom>
            TDEE Calculator
          </Typography>
        </Grid>

        <Grid item xs={3} className={classes.item}>
          <FormControl className={classes.group} component="fieldset" required>
            <FormLabel component="legend">Measurements</FormLabel>
            <TextField
              className={classes.textField}
              required
              label="Age"
              className={classes.textField}
              helperText="Age in years"
            />
            <TextField
              className={classes.textField}
              required
              label="Height"
              className={classes.textField}
              helperText="Height in cm"
            />
            <TextField
              className={classes.textField}
              required
              label="Weight"
              className={classes.textField}
              helperText="Weight in kg"
            />
          </FormControl>
        </Grid>
        <Grid item xs={3} className={classes.item}>
          <FormControl className={classes.group} component="fieldset" required>
            <FormLabel component="legend">Activity Level</FormLabel>
            <Select
              className={classes.select}
              value={this.state.activityLevel}
              onChange={this.handleActivityLevelChange}
              inputProps={{
                name: 'activityLevel'
              }}
            >
              <MenuItem value="">
                <em>none</em>
              </MenuItem>
              <MenuItem value={'1'}>Sleepin</MenuItem>
              <MenuItem value={'1.25'}>Warmed Up</MenuItem>
              <MenuItem value={'1.55'}>Michael Phelps</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.group} component="fieldset" required>
            <FormLabel component="legend">Dietary Goal</FormLabel>
            <Select
              className={classes.select}
              value={this.state.dietaryGoal}
              onChange={this.handleDietaryGoalChange}
              inputProps={{
                name: 'dietaryGoal'
              }}
            >
              <MenuItem value="">
                <em>none</em>
              </MenuItem>
              <MenuItem value={'0.8'}>Cut 20%</MenuItem>
              <MenuItem value={'1'}>Maintain</MenuItem>
              <MenuItem value={'1.2'}>Bulk 20%</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.group} component="fieldset" required>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              className={classes.radioGroup}
              aria-label="gender"
              name="gender1"
              value={this.state.gender}
              onChange={this.handleGenderChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Calculator);
