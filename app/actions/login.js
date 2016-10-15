import Authentication from '../services/Authentication';
import { browserHistory } from 'react-router';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from './constants';

export function login (username, password) {
  return dispatch => {
    dispatch(requestLogin());

    let authentication = new Authentication({ username, password });

    return authentication.login()
      .then(json => dispatch(receiveLogin(json)))
      .catch(json => dispatch(failLogin(json)));
  };
};

export function logout () {
  return dispatch => {
    dispatch(requestLogout());

    return Authentication.logout()
      .then(json => dispatch(receiveLogout(json)))
      .catch(json => dispatch(failLogout(json)));
  };
};

function requestLogin () {
  return {
    'type': LOGIN_REQUEST
  };
};

function receiveLogin (options) {
  browserHistory.push(options.url);

  return {
    'type': LOGIN_SUCCESS,
    'data': options.data
  };
};

function failLogin (data) {
  return {
    'type': LOGIN_FAILURE,
    'data': data
  };
};

function requestLogout () {
  return {
    'type': LOGOUT_REQUEST
  };
};

function receiveLogout () {
  browserHistory.push('/login');

  return {
    'type': LOGOUT_SUCCESS
  };
};

function failLogout (data) {
  return {
    'type': LOGOUT_FAILURE,
    'data': data
  };
};
