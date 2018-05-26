import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScreenSize from './components/util/ScreenSize';
import Header from './components/Header/Header';
import Landing from './views/Landing';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ScreenSize>
          <Router>
            <div style={{ overflowX: 'hidden' }}>
              <Route
                path="/"
                render={props => props.location.pathname !== '/' && <Header />}
              />
              <Route exact path="/" component={Landing} />
            </div>
          </Router>
        </ScreenSize>
      </MuiThemeProvider>
    );
  }
}

export default App;
