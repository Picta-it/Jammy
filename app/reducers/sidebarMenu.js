import { MENU_SELECT_ITEM, MENU_TOGGLE } from '../actions/constants';

var initialState = {
  opened: false,
  menus: [{
    id:       1,
    text:     'Dashboard',
    link:     '/dashboard',
    selected: false
  }, {
    id:       2,
    text:     'Page 1',
    link:     '/dashboard',
    selected: false
  }, {
    id:       3,
    text:     'Menu 3',
    link:     '/dashboard',
    selected: false
  }, {
    id:       4,
    text:     'Menu 4',
    link:     '/dashboard',
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
