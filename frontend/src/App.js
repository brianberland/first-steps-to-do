import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Dashboard from 'pages/Dashboard';

import TaskStore from 'TaskStore';

const theme = createMuiTheme({palette: {type: 'dark'}});
const store = new TaskStore();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Dashboard store={store} />
      </MuiThemeProvider>
    );
  }
}

export default App;
