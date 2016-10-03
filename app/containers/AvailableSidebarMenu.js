import { connect } from 'react-redux';
import { toggleMenu, selectMenuItem } from '../actions';
import SidebarMenu from '../components/SidebarMenu';

const mapStateToProps = (state) => {
  return state.sidebarMenu;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClick: (id) => {
      dispatch(selectMenuItem(id));
    },
    onToggleMenuClick: () => {
      dispatch(toggleMenu());
    }
  };
};

const AvailableSidebarMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarMenu);

export default AvailableSidebarMenu;
