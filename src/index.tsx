import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import moment from 'moment';
import { createStore } from 'redux';
import { rootReducer } from 'redux/reducers';
import { defaultState as tabDefaultState } from 'redux/reducers/tab';


import './index.css';
import App from './App';


function setupStore() {
  const initialState = { tab: tabDefaultState };
  return createStore(rootReducer, initialState);
}


const startApp = (lang: string) => {
  const store = setupStore();

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App lang={lang} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

// get locale
const browserLanguage = navigator.language.toLowerCase().split(/[_-]+/)[0];
const appLanguage = browserLanguage === 'it' ? 'it' : 'en';

// setup moment locale
moment.locale(appLanguage === 'it' ? 'it' : 'en-gb');

startApp(appLanguage);
