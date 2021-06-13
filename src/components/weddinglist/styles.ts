import { makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(3),
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3)
    },
  },
  info: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  value: {
    paddingLeft: theme.spacing(1)
  }
}));


export default useStyles;
