import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import createHistory from "history/createBrowserHistory";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { home, loadActivity, loadPlayersOnline } from "./store/home";

import localeData from "./locales.json";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const navigationMiddleware = routerMiddleware(history);

/**
 * Redux store
 * @type Store
 */
const store = createStore(
  combineReducers({
    home,
    router: routerReducer
  }),
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware, navigationMiddleware)
);

store.dispatch(loadActivity());
store.dispatch(loadPlayersOnline());

addLocaleData([...en]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

// hard-coding for debugging purposes, will need to be a combo of browser settings and user's choice in the future
// const language = "ru_RU";

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages =
  localeData[languageWithoutRegionCode] ||
  localeData[language] ||
  localeData.en;

render(
  <IntlProvider locale={language} messages={messages}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </IntlProvider>,
  document.getElementById("root")
);

registerServiceWorker();
