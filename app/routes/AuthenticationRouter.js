import Authentication from '../services/Authentication';
// import Authorization from '../services/Authorization';

export const requireLogin = function (nextState, replace) {
  // Next manage authorizations
  if (!Authentication.isLogged()) {
    replace('/login');
  }
};

// export const requireAuthorization = function (nextState, replace) {
//   // Next manage authorizations
//   if (!Authentication.isLogged()) {
//     replace('/login');
//   }
// };
