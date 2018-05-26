import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    background: theme.palette.background.default,
    marginTop: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    justifyContent: 'left',
    textTransform: 'none'
  },
  icon: {
    marginRight: '24px'
  },
  fontIcon: {
    fontSize: '19px'
  },
  imgIcon: {
    width: '18px'
  }
});

const AuthButton = ({
  classes,
  authService,
  fontIcon,
  imgIcon,
  color,
  backgroundColor,
  variant
}) => {
  return (
    <Button
      variant={variant}
      size="large"
      className={classes.root}
      style={{ color, backgroundColor }}
    >
      {fontIcon && (
        <i className={classNames(classes.icon, classes.fontIcon, fontIcon)} />
      )}
      {imgIcon && (
        <img
          src={imgIcon}
          className={classNames(classes.icon, classes.imgIcon)}
          alt=""
        />
      )}
      Sign In With {authService}
    </Button>
  );
};

export default withStyles(styles)(AuthButton);
