import React from 'react';

import { AppBar, makeStyles, Theme } from '@material-ui/core';

import Sections from './sections';
import SiteTitle from './sitetitle';


const useStyles = makeStyles((theme: Theme) => ({
  appbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.common.white
  },
}));


function Appbar(): JSX.Element {
  const classes = useStyles();
  return (
    <AppBar position='sticky' className={classes.appbar}>
      <SiteTitle />
      <Sections />
    </AppBar>
  );
}


export default Appbar;
