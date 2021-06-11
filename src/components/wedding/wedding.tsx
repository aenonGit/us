import React from 'react';
import { connect } from 'react-redux';

import rings from 'assets/images/rings.png';
import { State } from 'redux/reducers';
import { useTextStyles } from 'utils/styles';
import { Section } from 'utils/utils';

import {
  Typography
} from '@material-ui/core';

import useStyles from './styles';


const BareWedding = (props: ExtendedProps): JSX.Element => {
  const promiseRef = React.useRef<HTMLDivElement>(null);
  const classes = useStyles();
  const textClasses = useTextStyles();

  const { scrollToMe } = props;

  React.useEffect(
    () => {
      const ref = promiseRef.current;
      if (ref && scrollToMe) {
        ref.scrollIntoView({ behavior: 'smooth' });
      }
    }, [scrollToMe]
  );

  return (
    <div ref={promiseRef} className={classes.root}>
      <Typography variant="h2" align='center' className={textClasses.homeWinter}>
        Matrimonio
      </Typography>
      <div>
        <img className={classes.media} src={rings} />
      </div>
      <Typography variant="body2" color="textSecondary" component="p">
          15 Settembre 2021
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
          Cerimonia: ore 11.00 - Parrocchia S. Rita
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
          Ricevimento: ore 13.30 - Masseria Giosole
      </Typography>
    </div>
  );
};


type Props = unknown
type MappedProps = {
  scrollToMe: boolean
}
type ExtendedProps = Props & MappedProps

const mapStateToProps = (state: State): MappedProps => ({
  scrollToMe: state.tab.selectedTab === Section.WEDDING,
});


const Wedding = connect(mapStateToProps)(BareWedding);

export { Wedding };
