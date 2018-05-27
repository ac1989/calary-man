import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    paddingTop: '20vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1440px',
    margin: `0 ${theme.spacing.unit * 8}px`
  },
  helpTitle: {
    marginBottom: '2rem'
  }
});

class Help extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="display1" className={classes.helpTitle}>
          Help
        </Typography>
        <Typography variant="headline" gutterBottom>
          I'm new to fitness.
        </Typography>
        <Typography variant="headline" gutterBottom>
          I'm new to Calary Man.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Help);
