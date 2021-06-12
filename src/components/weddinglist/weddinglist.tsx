import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { connect } from 'react-redux';

import { State } from 'redux/reducers';
import { HeaderTypography } from 'utils/header';
import { useTextStyles } from 'utils/styles';
import { Section } from 'utils/utils';

import {
  Typography
} from '@material-ui/core';

import useStyles from './styles';


const messages = defineMessages({
  tab: { id: 'tab.weddingList' },
  title: { id: 'weddingList.title' },
  description: { id: 'weddingList.description' },
});


const BareWeddingList = (props: ExtendedProps): JSX.Element => {
  const promiseRef = React.useRef<HTMLDivElement>(null);
  const classes = useStyles();
  const textClasses = useTextStyles();
  const { formatMessage } = useIntl();

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
      <HeaderTypography text={formatMessage(messages.tab)} variant="h2" align='center' />
      <Typography variant="h4" color="textSecondary" className={textClasses.freehand}>
        {formatMessage(messages.title)}
      </Typography>
      <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
        {formatMessage(messages.description)}
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
