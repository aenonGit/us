import React from 'react';

import { makeStyles, Theme, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { FavoriteBorder } from '@material-ui/icons';


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: '5%',
    height: 'auto'
  },
  siteTitle: {
    color: theme.palette.primary.main,
    fontFamily: 'Home Winter',
    letterSpacing: '2px'
  }
}));


function NameDesktop(): JSX.Element {
  const classes = useStyles();
  return (
    <Typography variant={'h4'} className={classes.siteTitle}>
      Enzo {<FavoriteBorder />} Gabry
    </Typography>
  );
}


function NameMobile(): JSX.Element {
  const classes = useStyles();
  return (
    <Typography variant={'h4'} className={classes.siteTitle}>
      E {<FavoriteBorder />} G
    </Typography>
  );
}


function SiteTitle(): JSX.Element {
  const classes = useStyles();
  const isSmall = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <div className={classes.container}>
      { isSmall ? <NameMobile /> : <NameDesktop /> }
    </div>
  );
}


export default SiteTitle;
