import { combineReducers } from 'redux';
import sidebarMenu from './sidebarMenu';
import user from './user';

const jammyApp = combineReducers({
  sidebarMenu,
  user
});

export default jammyApp;
