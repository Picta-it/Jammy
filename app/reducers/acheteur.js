import { combineReducers } from 'redux';
import todo from './acheteur/todo';
import task from './acheteur/task';

const acheteur = combineReducers({
  todo,
  task
});

export default acheteur;
