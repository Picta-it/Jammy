import { /*applyMiddleware, compose, */createStore } from 'redux';
// import { browserHistory } from 'react-router';
// import createLogger from 'redux-logger';
// import thunk from 'redux-thunk';
// import { updateLocation } from './location';
// import { persistState } from 'redux-devtools';
// import DevTools from '../containers/DevTools';
import jammyApp from '../reducers';

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  // const middleware = [thunk, createLogger];

  // ======================================================
  // Store Enhancers
  // ======================================================
  // const enhancers = [];

  // function getDebugSessionKey () {
  //   // You can write custom logic here!
  //   // By default we try to read the key from ?debug_session=<key> in the address bar
  //   const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  //   return (matches && matches.length > 0) ? matches[1] : null;
  // }

  // if (__DEV__) {
  //   const devToolsExtension = window.devToolsExtension;
  //   if (typeof devToolsExtension === 'function') {
  //     enhancers.push(devToolsExtension());
  //   }

  //   enhancers.push(DevTools.instrument());
  //   enhancers.push(persistState(getDebugSessionKey()));
  // }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    jammyApp
  );
  // store.asyncReducers = {};

  // // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  // store.unsubscribeHistory = browserHistory.listen(updateLocation(store));

  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     const reducers = require('./reducers').default;
  //     store.replaceReducer(reducers(store.asyncReducers));
  //   });
  // }

  return store;
};
