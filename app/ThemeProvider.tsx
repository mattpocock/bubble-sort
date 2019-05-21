import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import teal from '@material-ui/core/colors/teal';
import amber from '@material-ui/core/colors/amber';

const ThemeProvider = ({ children }: { children: any }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: amber,
  },
});

export default ThemeProvider;
