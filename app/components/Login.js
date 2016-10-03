import React from 'react';

const Login = (_store) => (
  <li>
    Login Page
  </li>
);

Login.propTypes = {
};

// export default LoginPage;

export default (store) => ({
  path : 'counter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    cb(null, Login);
  }
});
