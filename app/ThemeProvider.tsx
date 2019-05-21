import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal, amber } from '@material-ui/core/colors';

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
