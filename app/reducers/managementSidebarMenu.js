import { MENU_SELECT_ITEM, MENU_TOGGLE } from '../actions/constants';

var initialState = {
  opened: false,
  menus: [{
    id:       1,
    text:     'Dashboard',
    link:     '/management/dashboard',
    icon:     'dashboard',
    selected: false
  }, {
    id:       2,
    text:     'Utilisateurs',
    link:     '/management/utilisateurs',
    icon:     'users',
    selected: false
  }, {
    id:       3,
    text:     'Abonnements',
    link:     '/management/abonnements',
    icon:     'subscriptions',
    selected: false
  }, {
    id:       4,
    text:     'Services',
    link:     '/management/services',
    icon:     'services',
    selected: false
  }, {
    id:       5,
    text:     'Coûts',
    link:     '/management/couts',
    icon:     'costs',
    selected: false
  }, {
    id:       6,
    text:     'Configuration',
    link:     '/management/configuration',
    icon:     'configuration',
    selected: false
  }]
};

function sidebarMenu (state = initialState, action) {
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

export default sidebarMenu;
