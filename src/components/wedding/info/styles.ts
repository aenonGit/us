import { makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => ({
  rootCardDesktop: {
    display: 'flex',
    margin: theme.spacing(2),
    width: '40%',
    padding: theme.spacing(4, 3),
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      width: '60%',
    },
  },
  rootCardMobile: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoDesktop: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
  infoMobile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  infoTextRight: {
    textAlign: 'right'
  },
  infoTextMobile: {
    textAlign: 'center'
  },
  media: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    objectFit: 'cover',
  },
}));


export default useStyles;
