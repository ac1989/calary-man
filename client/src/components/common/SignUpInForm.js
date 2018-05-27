import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AuthButton from './AuthButton';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: `${theme.spacing.unit}px`
  }
});

const SignUpInForm = ({ classes, autoFocus, onClick }) => {
  return (
    <form noValidate autoComplete="off" className={classes.root}>
      <TextField
        id="username"
        label="Username"
        margin="normal"
        autoFocus={autoFocus}
      />
      <TextField
        id="password"
        label="Password"
        margin="normal"
        type="password"
      />
      <AuthButton
        fontIcon="fas fa-sign-in-alt"
        authService="Calary Man"
        onClick={onClick}
      />
    </form>
  );
};

export default withStyles(styles)(SignUpInForm);
