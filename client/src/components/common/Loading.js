import React from 'react';
import { Transition, animated } from 'react-spring';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.background.default,
    zIndex: 100
  }
});

const Loading = ({ classes, onClick, loading }) => {
  return (
    <Transition
      from={{ transform: 'scale(0.5)', opacity: 0 }}
      to={{ transform: 'scale(1)', opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {// FIXME: unmount not working
      loading &&
        (style => (
          <animated.div className={classes.root} style={{ ...style }}>
            <CircularProgress />
            <Typography variant="subheading" style={{ marginTop: '24px' }}>
              Authenticating
            </Typography>
            <Button
              style={{ position: 'absolute', bottom: '8px' }}
              onClick={() => {
                onClick();
              }}
            >
              Cancel
            </Button>
          </animated.div>
        ))}
    </Transition>
  );
};

export default withStyles(styles)(Loading);
