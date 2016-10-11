import { MAIN_LOADER_TOGGLE } from '../actions/constants';

var initialState = {
  loading: false
};

/**
 * { type: 'FETCH_POSTS' }
{ type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
{ type: 'FETCH_POSTS', status: 'success', response: { ... } }
 */

function status (state = initialState, action) {
  switch (action.type) {
    case MAIN_LOADER_TOGGLE:
      return {
        loading: true
      };
    default:
      return state;
  }
}

export default status;
