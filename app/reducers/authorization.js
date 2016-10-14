import {
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAILURE
} from '../actions/constants';

var initialState = {
  fetching: false,
  response: {
    features: []
  },
  error: undefined
};

function authentication (state = initialState, action) {
  switch (action.type) {
    case AUTHORIZATION_REQUEST:
      return Object.assign({}, initialState, {
        fetching: true,
        error:    undefined
      });
    case AUTHORIZATION_SUCCESS:
      return {
        fetching: false,
        response: {
          features:    action.data.features
        },
        error:    undefined
      };
    case AUTHORIZATION_FAILURE:
      return {
        fetching: false,
        response: {
          features:    undefined
        },
        error:    action.data.error
      };
    default:
      return state;
  }
}

export default authentication;
