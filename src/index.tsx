import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { initFirebaseAnalytics } from 'analytics/firebaseAnalytics';
import moment from 'moment';
import { setupStore } from 'utils/redux';

import './index.css';
import App from './App';


const startApp = (lang: string) => {
  const store = setupStore();


  // init and start the analytics manager
  initFirebaseAnalytics();

  ReactDOM.render(
    <Provider store={store}>
      <App lang={lang} />
    </Provider>,
    document.getElementById('root')
  );
};

// get locale
const browserLanguage = navigator.language.toLowerCase().split(/[_-]+/)[0];
const appLanguage = browserLanguage === 'it' ? 'it' : 'en';

// setup moment locale
moment.locale(appLanguage === 'it' ? 'it' : 'en-gb');

startApp(appLanguage);
