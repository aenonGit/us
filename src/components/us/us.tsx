import React from 'react';
import { connect } from 'react-redux';

import us from 'assets/images/us.jpg';
import { State } from 'redux/reducers';
import { useTextStyles } from 'utils/styles';
import { Section } from 'utils/utils';

import {
  Card,
  CardMedia,
  Typography
} from '@material-ui/core';

import useStyles from './styles';


const BareUs = (props: ExtendedProps): JSX.Element => {
  const usRef = React.useRef<HTMLDivElement>(null);
  const classes = useStyles();
  const textClasses = useTextStyles();

  const { scrollToMe } = props;

  React.useEffect(
    () => {
      if (usRef.current && scrollToMe) {
        usRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [scrollToMe]
  );

  return (
    <div ref={usRef} className={classes.root}>
      <div className={classes.enzo}>
        <Typography gutterBottom variant="h3" className={textClasses.freehand}>
          Vincenzo Esposito
        </Typography>
        <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
          Via Enrico Fermi, 197
        </Typography>
        <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
          Villaricca (Na)
        </Typography>
      </div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={us} />
      </Card>
      <div className={classes.gabry}>
        <Typography gutterBottom variant="h3" className={textClasses.freehand}>
          Gabriella Esposito
        </Typography>
        <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
          Via Enrico Fermi, 217
        </Typography>
        <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
          Villaricca (Na)
        </Typography>
      </div>
    </div>
  );
};


type Props = unknown
type MappedProps = { scrollToMe: boolean }
type ExtendedProps = Props & MappedProps

const mapStateToProps = (state: State): MappedProps => ({
  scrollToMe: state.tab.selectedTab === Section.US,
});


const Us = connect(mapStateToProps)(BareUs);

export { Us };
