import {
  USER_FETCH_DATA_REQUEST,
  USER_FETCH_DATA_SUCCESS,
  USER_FETCH_DATA_FAILURE
} from './constants';

export function fetchUserData (token) {
  return {
    'type': USER_FETCH_DATA_REQUEST
  };
};

