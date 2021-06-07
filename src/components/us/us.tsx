import React from 'react';

import bride from 'assets/images/bride.png';
import groom from 'assets/images/groom.jpg';

import {
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';

import useStyles from './styles';


const Groom = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={groom} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Vincenzo Esposito
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Via Enrico Fermi, 197
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Villaricca (Na)
        </Typography>
      </CardContent>
    </Card>
  );
};

const Bride = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={bride} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Gabriella Esposito
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Via Enrico Fermi, 217
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Villaricca (Na)
        </Typography>
      </CardContent>
    </Card>
  );
};

const Us = (): JSX.Element => {
  return (
    <React.Fragment>
      <Groom />
      <Bride />
    </React.Fragment>
  );
};


export { Us };
