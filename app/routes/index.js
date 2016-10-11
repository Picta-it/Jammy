// We only need to import the modules necessary for initial render
import CoreLayout from '../containers/CoreLayout';
// import Dashboard from '../components/Dashboard';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Login from '../containers/Login';
import { authenticationRouter } from './authentication';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = function (store) {
  return ({
    path        : '/',
    indexRoute  : { onEnter: (nextState, replace) => replace('/admin/home') },
    childRoutes : [{
      path        : 'login',
      component   : Login
    }, {
      path        : 'admin',
      component   : CoreLayout,
      indexRoute  : { onEnter: (nextState, replace) => replace('/admin/home') },
      onEnter     : authenticationRouter,
      childRoutes : [{
        path        : 'home',
        component   : Home
      }, {
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
