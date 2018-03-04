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

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { home, loadActivity } from "./store/home";

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

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
