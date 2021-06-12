import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { connect } from 'react-redux';

import us from 'assets/images/us.jpg';
import { State } from 'redux/reducers';
import { HeaderTypography } from 'utils/header';
import { useTextStyles } from 'utils/styles';
import { Section } from 'utils/utils';

import {
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core';

import useStyles from './styles';


const messages = defineMessages({
  title: { id: 'us.title' },
});


const DesktopUs = () => {
  const classes = useStyles();
  const textClasses = useTextStyles();
  return (
    <div className={classes.desktopContainer}>
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
      <img className={classes.media} src={us} />
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


const MobileUs = () => {
  const classes = useStyles();
  const textClasses = useTextStyles();
  return (
    <React.Fragment>
      <img className={classes.media} src={us} />
      <div className={classes.mobileUsContainer}>
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
    </React.Fragment>
  );
};


const BareUs = (props: ExtendedProps) => {
  const usRef = React.useRef<HTMLDivElement>(null);
  const classes = useStyles();
  const { formatMessage } = useIntl();
  const { scrollToMe } = props;
  const isSmall = useMediaQuery(useTheme().breakpoints.down('sm'));

  React.useEffect(
    () => {
      if (usRef.current && scrollToMe) {
        usRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [scrollToMe]
  );

  return (
    <div ref={usRef} className={classes.root}>
      <HeaderTypography text={formatMessage(messages.title)} gutterBottom variant="h2" align='center' />
      { isSmall ? <MobileUs /> : <DesktopUs /> }
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
