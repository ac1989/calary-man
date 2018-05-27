import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SignUpInForm from './SignUpInForm';
import AuthButton from './AuthButton';
import google from '../../images/logos/google-auth-36h.png';
import styles from './SignUpIn.style';
import Loading from './Loading';

class SignUpIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticating: false,
      value: this.props.value || 'signin'
    };
  }

  handleChange = (e, value) => {
    this.setState({ value });
  };

  handleClick = () => {
    console.log('click');
    this.setState(state => ({
      ...state,
      authenticating: !state.authenticating
    }));
  };

  render() {
    const { classes, autoFocus } = this.props;
    const { value, authenticating } = this.state;
    console.log(authenticating);
    return (
      <Paper className={classes.root} elevation={0}>
        <Loading onClick={this.handleClick} loading={authenticating} />
        <div className={classes.authServices}>
          {value === 'signin' ? (
            <Typography align="center" variant="title" gutterBottom>
              Sign In
            </Typography>
          ) : (
            <Typography align="center" variant="title" gutterBottom>
              Sign Up
            </Typography>
          )}
          <SignUpInForm autoFocus={autoFocus} onClick={this.handleClick} />
          <Divider />
          <AuthButton
            authService="Github"
            fontIcon="fab fa-github"
            color="#fff"
            backgroundColor="#24292e"
            onClick={this.handleClick}
          />
          <AuthButton
            authService="Google"
            imgIcon={google}
            color="rgba(0, 0, 0, 0.54)"
            backgroundColor="#fff"
            onClick={this.handleClick}
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
