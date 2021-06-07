import React from 'react';

import { Tab as MuiTab, useMediaQuery, useTheme } from '@material-ui/core';

import useStyles from './styles';


function Tab(props: Props): JSX.Element {
  const isSmall = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <React.Fragment>
      { isSmall ? <MobileTab {...props} /> : <DesktopTab {...props} /> }
    </React.Fragment>
  );
}


function DesktopTab(props: Props): JSX.Element {
  const { icon, label, onClick, value, ...rest } = props;
  const classes = useStyles();
  return (
    <MuiTab
      className={classes.desktopTab}
      label={label}
      onClick={onClick}
      value={value}
      { ...rest }
    />
  );
}


function MobileTab(props: Props): JSX.Element {
  const { icon, label, onClick, value, ...rest } = props;
  const classes = useStyles();
  return (
    <MuiTab
      className={classes.mobileTab}
      icon={icon}
      onClick={onClick}
      value={value}
      { ...rest }
    />
  );
}


type Props = {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
  value: number;
}


export default Tab;
