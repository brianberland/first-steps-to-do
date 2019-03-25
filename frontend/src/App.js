import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Dashboard from 'pages/Dashboard';

const theme = createMuiTheme({palette: {type: 'dark'}});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Dashboard />
      </MuiThemeProvider>
    );
  }
}

export default App;
