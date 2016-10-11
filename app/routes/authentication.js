import Authentication from '../services/Authentication';

export const authenticationRouter = function (nextState, replace) {
  // Next manage authorizations
  if (!Authentication.isLogged()) {
    replace('/login');
  }
};
