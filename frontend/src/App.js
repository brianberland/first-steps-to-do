import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Dashboard from 'pages/Dashboard';

import { ListStore, ListContext } from 'TaskStore';

const theme = createMuiTheme({palette: {type: 'dark'}});
const store = new ListStore();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ListContext.Provider value={store}>
          <Dashboard />
        </ListContext.Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
