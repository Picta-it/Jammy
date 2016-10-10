import { Authentication } from '../services/Authentication';

export const authenticationRouter = function (nextState, replace) {
  let user = nextState.user;

  // Next manage authorizations
  if (!Authentication.isLogged(user)) {
    replace('/login');
  }
};
