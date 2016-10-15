import { combineReducers } from 'redux';
import todo from './assisteur/todo';
import issue from './assisteur/issue';

const assisteur = combineReducers({
  todo,
  issue
});

export default assisteur;
