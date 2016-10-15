import { MENU_SELECT_ITEM, MENU_TOGGLE } from '../actions/constants';

var initialState = {
  opened: false,
  menus: [{
    id:       1,
    text:     'Dashboard',
    link:     '/prestataire/dashboard',
    icon:     'dashboard',
    selected: false
  }, {
    id:       2,
    text:     'Utilisateurs',
    link:     '/prestataire/utilisateurs',
    icon:     'users',
    selected: false
  }, {
    id:       3,
    text:     'Abonnements',
    link:     '/prestataire/abonnements',
    icon:     'subscriptions',
    selected: false
  }, {
    id:       4,
    text:     'Services',
    link:     '/prestataire/services',
    icon:     'services',
    selected: false
  }]
};

function depanneurSidebarMenu (state = initialState, action) {
  switch (action.type) {
    case MENU_TOGGLE:
      return {
        opened: !state.opened,
        menus:  state.menus
      };
    case MENU_SELECT_ITEM:
      return {
        opened: state.opened,
        menus:  state.menus.map(function (menu) {
          return {
            id:       menu.id,
            text:     menu.text,
            selected: (action.id === menu.id)
          };
        })
      };
    default:
      return state;
  }
}

export default depanneurSidebarMenu;
