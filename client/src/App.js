import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScreenSize from './components/util/ScreenSize';
import Header from './components/Header/Header';
import SignUpIn from './components/common/SignUpIn';

const styles = theme => ({
  // work in concert with <Header /> height.
  root: {
    width: '100%',
    paddingTop: '56px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '0px'
    }
  }
});

let ContentWrapper = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

ContentWrapper = withStyles(styles)(ContentWrapper);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ScreenSize>
          <Header auth={false} />
          <ContentWrapper>
            <SignUpIn />
          </ContentWrapper>
        </ScreenSize>
      </MuiThemeProvider>
    );
  }
}

export default App;
