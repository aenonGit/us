import { makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(3),
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3)
    },
  },
}));


export default useStyles;
