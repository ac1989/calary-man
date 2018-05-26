import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subheading: {
    opacity: '0.7'
  }
});

const Brand = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="display2">CALARY MAN</Typography>
      <Typography className={classes.subheading} variant="subheading">
        Fitness Tools and Tracking
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Brand);
