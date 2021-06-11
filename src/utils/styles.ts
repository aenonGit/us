import { makeStyles, Theme } from "@material-ui/core";


const useTextStyles = makeStyles((theme: Theme) => ({
  homeWinter: {
    color: theme.palette.primary.main,
    fontFamily: 'Home Winter',
    letterSpacing: '2px',
  }
}));


export { useTextStyles };
