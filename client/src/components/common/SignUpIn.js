import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
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

class SignUpIn extends Component {
  state = {
    value: 'signin'
  };

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, autoFocus } = this.props;
    const { value } = this.state;
    return (
      <Paper className={classes.root} elevation={0}>
        <div className={classes.authServices}>
          <div className={classes.transitionWrap}>
            <Transition
              from={{ opacity: 0, transform: 'translateX(-100px)' }}
              enter={{ opacity: 1, transform: 'translateX(0px)' }}
              leave={{ opacity: 0, transform: 'translateX(100px)' }}
              native
            >
              {// prettier-ignore
              value === 'signin' ?
              (style => (
                <animated.div style={{ ...style, position: 'absolute', top: '0', left: 0, right: 0, margin: 'auto' }}>
                  <Typography align="center" variant="title" gutterBottom>
                    SignUp
                  </Typography>
                </animated.div>
              )) : (style => (
                <animated.div style={{ ...style, position: 'absolute', top: '0', left: 0, right: 0, margin: 'auto' }}>
                  <Typography align="center" variant="title" gutterBottom>
                    SignIn
                  </Typography>
                </animated.div>
              ))}
            </Transition>
          </div>
          <SignUpInForm autoFocus={autoFocus} />
          <Divider />
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
