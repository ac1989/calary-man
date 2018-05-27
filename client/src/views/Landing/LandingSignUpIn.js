import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SignUpIn from '../../components/common/SignUpIn';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const LandingSignUpIn = ({ classes }) => {
  return (
    <div className={classes.root}>
      <SignUpIn loading={true} />
    </div>
  );
};

export default withStyles(styles)(LandingSignUpIn);
