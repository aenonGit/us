import React from 'react';

import logo from 'assets/images/logo.png';
import { HeaderTypography } from 'utils/header';

import { makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';


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


function SiteTitle(): JSX.Element {
  const classes = useStyles();
  const isSmall = useMediaQuery(useTheme().breakpoints.down('sm'));
  const enzo = isSmall ? 'E' : 'Enzo';
  const gabry = isSmall ? 'G' : 'Gabry';
  return (
    <div className={classes.container}>
      <HeaderTypography
        text={enzo}
        variant='h4'
        className={classes.siteTitle}
        padding={false}
      />
      <Logo /> 
      <HeaderTypography
        text={gabry}
        variant='h4'
        className={classes.siteTitle}
        padding={false}
      />
    </div>
  );
}


export default SiteTitle;
