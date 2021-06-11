import { makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: theme.spacing(3),
  },
  enzo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gabry: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    border: `1px solid ${theme.palette.primary.main}`
  },
  media: {
    height: 300,
    width: 400,
  },
}));


export default useStyles;
