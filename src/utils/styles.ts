import { makeStyles, Theme } from "@material-ui/core";


const useTextStyles = makeStyles((theme: Theme) => ({
  homeWinter: {
    color: theme.palette.primary.main,
    fontFamily: 'Home Winter',
    letterSpacing: '2px',
  },
  freehand: {
    color: theme.palette.common.black,
    fontFamily: 'Freehand-591-BT',
    textAlign: 'center',
    whiteSpace: 'pre-line'
  }
}));


export { useTextStyles };
