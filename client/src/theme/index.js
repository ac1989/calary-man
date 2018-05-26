import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: cyan,
    secondary: grey,
    error: orange
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: grey[900]
      }
    }
  }
});

export default theme;
