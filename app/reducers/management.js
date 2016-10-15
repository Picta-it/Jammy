import { combineReducers } from 'redux';
import todo from './management/todo';
import issue from './management/issue';

const management = combineReducers({
  todo,
  issue
});

export default management;
