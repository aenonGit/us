import { makeStyles, Theme } from "@material-ui/core";


const useTextStyles = makeStyles((theme: Theme) => ({
  freehand: {
    color: theme.palette.common.black,
    textAlign: 'center',
    whiteSpace: 'pre-line'
  }
}));


export { useTextStyles };
