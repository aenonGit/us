import React from "react";

import santarita from 'assets/images/santarita.jpg';
import { HeaderTypography } from "utils/header";

import { CardMedia, Link, Typography, useMediaQuery, useTheme } from "@material-ui/core";

import useStyles from "./styles";


const DesktopCeremony = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.rootCardDesktop}>
      <div className={classes.infoDesktop}>
        <HeaderTypography text='Celebrazione' variant='h3' />
        <Typography variant='h4'>
          ore 11.00
        </Typography>
        <Typography variant='h5'>
          Parrocchia Santa Rita da Cascia
        </Typography>
        <Typography variant='h5'>
          Via Santa Rita - Villaricca (Na)
        </Typography>
        <Typography variant='h5'>
          <Link
            href='https://goo.gl/maps/k4SwgMu9BM8nnLXe6'
            color='primary'
            target="_blank"
            rel="noopener noreferrer"
          >
            indicazioni
          </Link>
        </Typography>
      </div>
      <CardMedia
        className={classes.media}
        component='img'
        image={santarita}
        title='Santa Rita Church'
      />
    </div>
  );
};


const MobileCeremony = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.rootCardMobile}>
      <div className={classes.infoMobile}>
        <HeaderTypography text='Celebrazione' variant='h3' className={classes.infoTextMobile} />
        <CardMedia
          className={classes.media}
          component='img'
          image={santarita}
          title='Parrocchia Santa Rita'
        />
        <Typography variant='h4' className={classes.infoTextMobile}>
          ore 11.00
        </Typography>
        <Typography variant='h5' className={classes.infoTextMobile}>
          Parrocchia Santa Rita da Cascia
        </Typography>
        <Typography variant='h5' className={classes.infoTextMobile}>
          Via Santa Rita - Villaricca (Na)
        </Typography>
        <Typography variant='h5' className={classes.infoTextMobile}>
          <Link
            href='https://goo.gl/maps/k4SwgMu9BM8nnLXe6'
            color='primary'
            target="_blank"
            rel="noopener noreferrer"
          >
            indicazioni
          </Link>
        </Typography>
      </div>
    </div>
  );
};


const Ceremony = (): JSX.Element => {
  const isSmall = useMediaQuery(useTheme().breakpoints.down('sm'));
  return isSmall ? <MobileCeremony /> : <DesktopCeremony />;
};


export { Ceremony };
