import { combineReducers } from 'redux';
import todo from './acheteur/todo';
import issue from './acheteur/issue';

const acheteur = combineReducers({
  todo,
  task
});

export default acheteur;
