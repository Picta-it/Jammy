import {
  MAIN_LOADER_TOGGLE,
  MENU_SELECT_ITEM,
  MENU_TOGGLE
} from './constants';

export function selectMenuItem (id) {
  return { type: MENU_SELECT_ITEM, id };
};

export function toggleMenu () {
  return { type: MENU_TOGGLE };
};

export function toggleMainLoader () {
  return { type: MAIN_LOADER_TOGGLE };
};
