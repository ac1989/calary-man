import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SignUpInForm from './SignUpInForm';
import AuthButton from './AuthButton';
import google from '../../images/logos/google-auth-36h.png';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '400px'
    },
    [theme.breakpoints.up('sm')]: {
      width: '320px',
      marginTop: '10vh'
    }
  },
  authServices: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2
  },
  tab: {
    [theme.breakpoints.up('xs')]: {
      width: '50%'
    }
  }
});

class SignUpIn extends Component {
  state = {
    value: 'signin'
  };

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Paper className={classes.root} elevation={0}>
        <div className={classes.authServices}>
          <Typography align="center" variant="title" gutterBottom>
            {value === 'signin' ? 'Sign In' : 'Sign Up'}
          </Typography>
          <SignUpInForm />
          <AuthButton
            authService="Github"
            fontIcon="fab fa-github"
            color="#fff"
            backgroundColor="#24292e"
          />
          <AuthButton
            authService="Google"
            imgIcon={google}
            color="rgba(0, 0, 0, 0.54)"
            backgroundColor="#fff"
          />
        </div>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab value="signin" label="Sign In" className={classes.tab} />
          <Tab value="signup" label="Sign Up" className={classes.tab} />
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(styles)(SignUpIn);
