import { orange, teal } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: teal[700],
    },
    secondary: {
      main: orange[700],
    },
  },
  typography: {
    fontFamily: [
      'Freehand-591-BT',
    ].join(','),
  }
});

const theme = responsiveFontSizes(baseTheme);


export default theme;
