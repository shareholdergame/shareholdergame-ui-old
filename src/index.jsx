import React from "react";
import { render } from "react-dom";
import { shape, string } from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

import createHistory from "history/createBrowserHistory";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";

import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";

import { home, loadActivity, loadPlayersOnline } from "./store/home";
import { i18n, setLanguage } from "./store/i18n";
import { games } from "./store/games";

import localeData from "./locales/data.json";

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
    i18n,
    games,
    router: routerReducer
  }),
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware, navigationMiddleware)
);

addLocaleData([...en, ...ru]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them

// const browserLanguage =
//   (navigator.languages && navigator.languages[0]) ||
//   navigator.language ||
//   navigator.userLanguage;

// hard-coding for debugging purposes, will need to be a combo of browser settings and user's choice in the future
const browserLanguage = "ru_RU";
// const browserLanguage = "en_US";

store.dispatch(loadActivity());
store.dispatch(loadPlayersOnline());
store.dispatch(setLanguage(browserLanguage)); // set initial language on the browser

const I18nWrapper = props => (
  <IntlProvider
    key={props.locale}
    locale={props.locale}
    messages={props.messages}
  >
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </IntlProvider>
);

I18nWrapper.propTypes = {
  locale: string.isRequired,
  messages: shape().isRequired
};

const TranslatedApp = connect(state => {
  // read language from Redux store
  const { language } = state.i18n;

  // Split locales with a region code
  const locale = language.toLowerCase().split(/[_-]+/)[0];

  // try language first, then full locale, then fall back to basic english
  const messages = localeData[locale] || localeData[language] || localeData.en;

  return { locale, messages };
})(I18nWrapper);

render(
  <Provider store={store}>
    <TranslatedApp />
  </Provider>,
  document.getElementById("root")
);

// registerServiceWorker();
