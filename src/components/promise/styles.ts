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
  media: {
    width: 'auto',
    height: 200,
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      height: 100,
    },
  },
}));


export default useStyles;
