import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { connect } from 'react-redux';

import { Event } from 'analytics/events';
import { logEvent } from 'analytics/firebaseAnalytics';
import classnames from 'classnames';
import { State } from 'redux/reducers';
import { HeaderTypography } from 'utils/header';
import { useTextStyles } from 'utils/styles';
import { Section } from 'utils/utils';

import {
  Divider,
  Link,
  Typography,
  useTheme
} from '@material-ui/core';

import useStyles from './styles';


const messages = defineMessages({
  tab: { id: 'tab.weddingList' },
  title: { id: 'weddingList.title' },
  location: { id: 'weddingList.location' },
  addressKey: { id: 'weddingList.addressKey' },
  addressValue: { id: 'weddingList.addressValue' },
  addressLink: { id: 'weddingList.addressLink' },
  usernameKey: { id: 'weddingList.usernameKey' },
  usernameValue: { id: 'weddingList.usernameValue' },
  passwordKey: { id: 'weddingList.passwordKey' },
  passwordValue: { id: 'weddingList.passwordValue' },
  description: { id: 'weddingList.description' },
  giftTitle: { id: 'weddingGift.title' },
  giftDescription: { id: 'weddingGift.description' },
  giftIbanKey: { id: 'weddingGift.ibanKey' },
  giftIbanValue: { id: 'weddingGift.ibanValue' },
  giftIbanHeading: { id: 'weddingGift.ibanHeading' }
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

  const onClick = React.useCallback(() => logEvent(Event.EXPERT_MALLARDO), []);

  const valueStyle = classnames(textClasses.freehand, classes.value);

  const theme = useTheme();

  const getWeddingGift = () => {
    return (
      <React.Fragment>
        <Typography variant="h4" color="textSecondary" className={textClasses.freehand}>
          {formatMessage(messages.giftTitle)}
        </Typography>
        <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
          {formatMessage(messages.giftDescription)}
        </Typography>
        <div className={classes.info}>
          <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
            {formatMessage(messages.giftIbanKey)}
          </Typography>
          <Typography variant="h6" className={valueStyle} style={{ color: theme.palette.primary.main }}>
            {formatMessage(messages.giftIbanValue)}
          </Typography>
        </div>
        <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
          {formatMessage(messages.giftIbanHeading)}
        </Typography>
      </React.Fragment>
    );
  };

  const getWeddingList = () => {
    return (
      <React.Fragment>
        <Typography variant="h4" color="textSecondary" className={textClasses.freehand}>
          {formatMessage(messages.title)}
        </Typography>
        <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
          {formatMessage(messages.location)}
        </Typography>
        <div className={classes.info}>
          <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
            {formatMessage(messages.addressKey)}
          </Typography>
          <Typography variant="h6" color="textSecondary" className={valueStyle}>
            <Link
              href={formatMessage(messages.addressLink)}
              color='primary'
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClick}
            >
              {formatMessage(messages.addressValue)}
            </Link>
          </Typography>
        </div>
        <div className={classes.info}>
          <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
            {formatMessage(messages.usernameKey)}
          </Typography>
          <Typography variant="h6" color="textSecondary" className={valueStyle}>
            {formatMessage(messages.usernameValue)}
          </Typography>
        </div>
        <div className={classes.info}>
          <Typography variant="h6" color="textSecondary" className={textClasses.freehand}>
            {formatMessage(messages.passwordKey)}
          </Typography>
          <Typography variant="h6" color="textSecondary" className={valueStyle}>
            {formatMessage(messages.passwordValue)}
          </Typography>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div ref={promiseRef} className={classes.root}>
      <HeaderTypography text={formatMessage(messages.tab)} variant="h2" align='center' />
      { getWeddingGift() }
      <Divider style={{ margin: '24px' }} />
      { getWeddingList() }
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
