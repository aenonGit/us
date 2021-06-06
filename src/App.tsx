import React from 'react';
import { IntlProvider } from 'react-intl';

import Router from 'components/router';
import * as Lang from 'l18n';
import theme from 'theme';

import { Container, CssBaseline, ThemeProvider, withStyles } from '@material-ui/core';

import { appStyles, useStyles } from './AppStyles';


function getMessages(lang: string) {
  switch (lang) {
    case 'it':
      return Lang.Italian;
    case 'en':
    default:
      return Lang.English;
  }
}


function App(props: Props): JSX.Element {
  const classes = useStyles(theme);
  const { lang } = props;
  const messages = getMessages(lang);
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={lang} messages={messages}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth={false} className={classes.container}>
            <Router />
          </Container>
        </React.Fragment>
      </IntlProvider>
    </ThemeProvider>
  );
}


type Props = {
  lang: string;
}


export default withStyles(appStyles(theme))(App);
