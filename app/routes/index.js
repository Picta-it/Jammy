// We only need to import the modules necessary for initial render
import CoreManagement from '../containers/CoreManagement';
import CoreDepanneur from '../containers/CoreDepanneur';
import CoreClient from '../containers/CoreClient';
import CoreAssureur from '../containers/CoreAssureur';
// import Dashboard from '../components/Dashboard';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Login from '../containers/Login';
import { requireLogin } from './AuthenticationRouter';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = function (store) {
  return ({
    path        : '/',
    indexRoute  : { onEnter: (nextState, replace) => replace('/login') },
    childRoutes : [{
      path        : 'login',
      component   : Login
    },{
      path        : 'logout',
      component   : Login
    }, {
      path        : 'management',
      component   : CoreManagement,
      indexRoute  : { onEnter: (nextState, replace) => replace('/management/dashboard') },
      onEnter     : requireLogin,
      childRoutes : [{
        path        : 'dashboard',
        component   : Dashboard
      }]
    }, {
      path        : 'prestataire',
      component   : CoreDepanneur,
      indexRoute  : { onEnter: (nextState, replace) => replace('/prestataire/dashboard') },
      onEnter     : requireLogin,
      childRoutes : [{
        path        : 'dashboard',
        component   : Dashboard
      }]
    }, {
      path        : 'client',
      component   : CoreClient,
      indexRoute  : { onEnter: (nextState, replace) => replace('/client/dashboard') },
      onEnter     : requireLogin,
      childRoutes : [{
        path        : 'dashboard',
        component   : Dashboard
      }]
    }, {
      path        : 'assureur',
      component   : CoreAssureur,
      indexRoute  : { onEnter: (nextState, replace) => replace('/assureur/dashboard') },
      onEnter     : requireLogin,
      childRoutes : [{
        path        : 'dashboard',
        component   : Dashboard
      }]
    }]
  });
};

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;
