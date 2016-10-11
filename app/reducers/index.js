import { combineReducers } from 'redux';
import authentication from './authentication';
import sidebarMenu from './sidebarMenu';
import status from './status';
import user from './user';

const jammyApp = combineReducers({
  authentication,
  sidebarMenu,
  status,
  user
});

export default jammyApp;
