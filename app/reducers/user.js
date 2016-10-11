import {
  USER_FETCH_DATA_REQUEST,
  USER_FETCH_DATA_SUCCESS,
  USER_FETCH_DATA_FAILURE
} from '../actions/constants';

var initialState = {
  fetching: false,
  response: {
    login:      '',
    first_name: '',
    last_name:  '',
    address:    ''
  },
  error: undefined
};

function user (state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_DATA_REQUEST:
      return Object.assign({}, initialState, {
        fetching: true,
        error:    undefined
      });
    case USER_FETCH_DATA_SUCCESS:
      return {
        fetching: false,
        response: {
          login:      action.data.login,
          first_name: action.data.first_name,
          last_name:  action.data.last_name,
          address:    action.data.address
        },
        error: undefined
      };
    case USER_FETCH_DATA_FAILURE:
      return Object.assign({}, initialState, {
        fetching: false,
        error: action.data.error
      });
    default:
      return state;
  }
}

export default user;
