import React from 'react';
import { connect } from 'react-redux';

import { State } from 'redux/reducers';
import { useTextStyles } from 'utils/styles';
import { Section } from 'utils/utils';

import {
  Typography
} from '@material-ui/core';

import useStyles from './styles';


const BareWeddingList = (props: ExtendedProps): JSX.Element => {
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
        Lista Nozze
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
          Expert Mallardo
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
          Istruzioni: https://blablabla.it
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
  scrollToMe: state.tab.selectedTab === Section.WEDDING_LIST,
});


const WeddingList = connect(mapStateToProps)(BareWeddingList);

export { WeddingList };
