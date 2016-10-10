import { combineReducers } from 'redux';
import sidebarMenu from './sidebarMenu';
import status from './status';
import user from './user';

const jammyApp = combineReducers({
  sidebarMenu,
  status,
  user
});

export default jammyApp;
