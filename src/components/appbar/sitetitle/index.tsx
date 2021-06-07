import React from 'react';

import logo from 'assets/images/logo.png';

import { makeStyles, Theme, Typography, useMediaQuery, useTheme } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: theme.spacing(5),
    height: 'auto',
  },
  siteTitle: {
    color: theme.palette.primary.main,
    fontFamily: 'Home Winter',
    letterSpacing: '2px',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1),
    }
  }
}));


const Logo = (): JSX.Element => {
  const classes = useStyles();
  return <img src={logo} className={classes.logo} />;
};


function NameDesktop(): JSX.Element {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant={'h4'} className={classes.siteTitle}>
        Enzo
      </Typography>
      <Logo /> 
      <Typography variant={'h4'} className={classes.siteTitle}>
        Gabry
      </Typography>
    </React.Fragment>
  );
}


function NameMobile(): JSX.Element {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant={'h4'} className={classes.siteTitle}>
        E
      </Typography>
      <Logo /> 
      <Typography variant={'h4'} className={classes.siteTitle}>
        G
      </Typography>
    </React.Fragment>
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
