// We only need to import the modules necessary for initial render
import CoreManagement from '../containers/CoreManagement';
import CoreAcheteur from '../containers/CoreAcheteur';
import CoreClient from '../containers/CoreClient';
import CoreAssisteur from '../containers/CoreAssisteur';
// import Dashboard from '../components/Dashboard';
import Dashboard from '../components/Dashboard';
import AssisteurIssue from '../containers/AssisteurIssue';
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
    }, {
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
      path        : 'acheteur',
      component   : CoreAcheteur,
      indexRoute  : { onEnter: (nextState, replace) => replace('/acheteur/dashboard') },
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
      path        : 'assisteur',
      component   : CoreAssisteur,
      indexRoute  : { onEnter: (nextState, replace) => replace('/assisteur/issue') },
      onEnter     : requireLogin,
      childRoutes : [{
        path        : 'issue',
        component   : AssisteurIssue
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
