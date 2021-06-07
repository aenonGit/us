import { makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => ({
  newlyweds: {
    display: 'flex',
    flexDirection: 'row',
  },
  root: {
    margin: theme.spacing(3),
  },
  media: {
    height: 140,
  },
}));


export default useStyles;
