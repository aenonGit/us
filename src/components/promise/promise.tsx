import React from 'react';
import { connect } from 'react-redux';

import bride from 'assets/images/bride.png';
import groom from 'assets/images/groom.jpg';
import { State } from 'redux/reducers';
import { Section } from 'utils/utils';

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

const BarePromise = (props: ExtendedProps): JSX.Element => {
  const promiseRef = React.useRef<HTMLDivElement>(null);

  const { scrollToMe } = props;

  React.useEffect(
    () => {
      if (promiseRef.current && scrollToMe) {
        promiseRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [scrollToMe]
  );

  return (
    <div ref={promiseRef}>
      <Groom />
      <Bride />
    </div>
  );
};


type Props = unknown
type MappedProps = {
  scrollToMe: boolean
}
type ExtendedProps = Props & MappedProps

const mapStateToProps = (state: State): MappedProps => ({
  scrollToMe: state.tab.selectedTab === Section.PROMISE,
});


const Promise = connect(mapStateToProps)(BarePromise);

export { Promise };
