import React from 'react';
import { connect } from 'react-redux';

import rings from 'assets/images/rings.png';
import { State } from 'redux/reducers';
import { HeaderTypography } from 'utils/header';
import { useTextStyles } from 'utils/styles';
import { Section } from 'utils/utils';

import {  Typography } from '@material-ui/core';

import { Ceremony } from './info/ceremony';
import { Party } from './info/party';

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
      <HeaderTypography text='Matrimonio' variant='h2' align='center' />
      <img className={classes.media} src={rings} />
      <Typography variant='h4' color='textSecondary' className={textClasses.freehand}>
        15 Settembre 2021
      </Typography>
      <Ceremony />
      <Party />
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
