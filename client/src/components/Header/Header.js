import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import HelpIcon from '@material-ui/icons/Help';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      position: 'absolute'
    },
    [theme.breakpoints.up('sm')]: {
      position: 'static'
    }
  },
  toolBar: {
    padding: '0',
    [theme.breakpoints.up('sm')]: {
      padding: `0 ${theme.spacing.unit * 2}px`
    },
    [theme.breakpoints.up('md')]: {
      padding: `0 ${theme.spacing.unit * 3}px`
    }
  },
  tabsRoot: {
    height: '100%'
  },
  tabRoot: {
    [theme.breakpoints.up('xs')]: {
      height: '56px',
      minWidth: '56px'
    },
    [theme.breakpoints.up('sm')]: {
      height: '64px',
      minWidth: '64px'
    }
  },
  flex: {
    flex: '1'
  }
});

class Header extends Component {
  state = {
    value: 'tdee'
  };

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, auth } = this.props;
    const { value } = this.state;

    const renderAuth = auth ? (
      <Avatar>T</Avatar>
    ) : (
      <Button color="inherit">Login</Button>
    );

    return (
      <AppBar position="static" elevation={0} className={classes.root}>
        <Toolbar className={classes.toolBar}>
          <Tabs
            classes={{ root: classes.tabsRoot }}
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleChange}
          >
            <Tab
              classes={{ root: classes.tabRoot }}
              value="tdee"
              icon={<Icon className="fas fa-calculator" />}
            />
            <Tab
              classes={{ root: classes.tabRoot }}
              value="intake"
              icon={<LocalDiningIcon />}
            />
            <Tab
              classes={{ root: classes.tabRoot }}
              value="workouts"
              icon={<FitnessCenterIcon />}
            />
          </Tabs>
          <div className={classes.flex} />
          {renderAuth}
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
