import React from "react";

import giosole from 'assets/images/giosole.jpg';
import { HeaderTypography } from "utils/header";

import { CardMedia, Link, Typography, useMediaQuery, useTheme } from "@material-ui/core";

import useStyles from "./styles";


const DesktopParty = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.rootCardDesktop}>
      <CardMedia
        className={classes.media}
        component='img'
        image={giosole}
        title='Masseria Giòsole'
      />
      <div className={classes.infoDesktop}>
        <HeaderTypography text='Ricevimento' variant='h3' className={classes.infoTextRight} />
        <Typography variant='h4' className={classes.infoTextRight}>
          ore 13.30
        </Typography>
        <Typography variant='h5' className={classes.infoTextRight}>
          Masseria Giòsole
        </Typography>
        <Typography variant='h5' className={classes.infoTextRight}>
          Via Giardini, 31 - Capua (Ce)
        </Typography>
        <Typography variant='h5' className={classes.infoTextRight}>
          <Link
            href='https://g.page/masseria-giosole?share'
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


const MobileParty = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.rootCardMobile}>
      <div className={classes.infoMobile}>
        <HeaderTypography text='Ricevimento' variant='h3' className={classes.infoTextMobile} />
        <CardMedia
          className={classes.media}
          component='img'
          image={giosole}
          title='Masseria Giòsole'
        />
        <Typography variant='h4' className={classes.infoTextMobile}>
          ore 14.00
        </Typography>
        <Typography variant='h5' className={classes.infoTextMobile}>
          Masseria Giòsole
        </Typography>
        <Typography variant='h5' className={classes.infoTextMobile}>
          Via Giardini, 31 - Capua (Ce)
        </Typography>
        <Typography variant='h5' className={classes.infoTextMobile}>
          <Link
            href='https://g.page/masseria-giosole?share'
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


const Party = (): JSX.Element => {
  const isSmall = useMediaQuery(useTheme().breakpoints.down('sm'));
  return isSmall ? <MobileParty /> : <DesktopParty />;
};


export { Party };
