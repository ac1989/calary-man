import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Brand from './Brand';
import Introduction from './Introduction';
import LandingSignUpIn from './LandingSignUpIn';

const styles = theme => ({
  root: {
    width: '100vw'
  },
  login: {
    position: 'fixed',
    right: 0,
    zIndex: '100',
    [theme.breakpoints.up('xs')]: {
      margin: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 1}px`
    },
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`
    }
  }
});

class Landing extends Component {
  state = {
    scroll: 0
  };

  scroll = to => {
    this.refs.parallax.scrollTo(to);
    this.setState({ scroll: to });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          className={classes.login}
          onClick={() => {
            this.scroll(2);
          }}
        >
          Login
        </Button>
        <Parallax pages={3} ref="parallax">
          <ParallaxLayer
            offset={0}
            speed={0.2}
            onClick={() => {
              this.scroll(1);
            }}
          >
            <Brand />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.2}
            onClick={() => {
              this.scroll(2);
            }}
          >
            <Introduction />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.2}>
            <LandingSignUpIn />
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default withStyles(styles)(Landing);
