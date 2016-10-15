import { combineReducers } from 'redux';
import authentication from './authentication';
import authorization from './authorization';
import managementSidebarMenu from './managementSidebarMenu';
import depanneurSidebarMenu from './depanneurSidebarMenu';
import assisteurSidebarMenu from './assisteurSidebarMenu';
import clientSidebarMenu from './clientSidebarMenu';
import status from './status';
import user from './user';

const jammyApp = combineReducers({
  authorization,
  authentication,
  managementSidebarMenu,
  depanneurSidebarMenu,
  assisteurSidebarMenu,
  clientSidebarMenu,
  status,
  user
});

export default jammyApp;
