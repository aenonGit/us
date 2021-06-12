import React from 'react';
import { connect } from 'react-redux';

import promise from 'assets/images/logo.png';
import { State } from 'redux/reducers';
import { HeaderTypography } from 'utils/header';
import { useTextStyles } from 'utils/styles';
import { Section } from 'utils/utils';

import { Typography } from '@material-ui/core';

import useStyles from './styles';


const BarePromise = (props: ExtendedProps): JSX.Element => {
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
      <HeaderTypography text='Promessa' variant='h2' />
      <img className={classes.media} src={promise} />
      <Typography variant="h4" color="textSecondary" className={textClasses.freehand}>
          Saremo Promessi
      </Typography>
      <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
          18 Giugno 2021
      </Typography>
      <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
          ore 10.30 - Parrocchia S. Rita
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
  scrollToMe: state.tab.selectedTab === Section.PROMISE,
});


const Promise = connect(mapStateToProps)(BarePromise);

export { Promise };
