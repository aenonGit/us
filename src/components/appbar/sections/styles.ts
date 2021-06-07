import { makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => ({
  indicator: {
    display: 'none'
  },
  desktopTab: {
    fontFamily: 'Freehand 591 BT',
  },
  mobileTab: {
    fontFamily: 'Freehand 591 BT',
    [theme.breakpoints.up('sm')]: {
      minWidth: '100px'
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '64px'
    }
  }
}));


export default useStyles;
