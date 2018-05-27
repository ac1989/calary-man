import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScreenSize from './components/util/ScreenSize';
import Header from './components/Header/Header';
import Landing from './views/Landing';
import Help from './views/Help';
import Calculator from './views/Calculator';

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
              <Route path="/tdee" component={Calculator} />
              <Route path="/help" component={Help} />
            </div>
          </Router>
        </ScreenSize>
      </MuiThemeProvider>
    );
  }
}

export default App;
