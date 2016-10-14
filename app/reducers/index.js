import { combineReducers } from 'redux';
import authentication from './authentication';
import authorization from './authorization';
import sidebarMenu from './sidebarMenu';
import status from './status';
import user from './user';

const jammyApp = combineReducers({
  authorization,
  authentication,
  sidebarMenu,
  status,
  user
});

export default jammyApp;
