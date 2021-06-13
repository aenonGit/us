import { makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(3),
  },
  desktopContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  mobileUsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: theme.spacing(2)
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
  media: {
    width: 480,
    height: 360,
    [theme.breakpoints.down('sm')]: {
      width: 240,
      height: 180,
    },
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(2),
    objectFit: 'cover'
  },
}));


export default useStyles;
