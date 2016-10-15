import { combineReducers } from 'redux';
import authentication from './authentication';
import authorization from './authorization';
import managementSidebarMenu from './managementSidebarMenu';
import acheteurSidebarMenu from './acheteurSidebarMenu';
import assisteurSidebarMenu from './assisteurSidebarMenu';
import clientSidebarMenu from './clientSidebarMenu';
import assisteur from './assisteur';
import management from './management';
import status from './status';
import user from './user';

const jammyApp = combineReducers({
  authorization,
  authentication,
  managementSidebarMenu,
  acheteurSidebarMenu,
  assisteurSidebarMenu,
  clientSidebarMenu,
  status,
  assisteur,
  management,
  user
});

export default jammyApp;
