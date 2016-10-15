import { connect } from 'react-redux';
import { toggleMenu, selectMenuItem, toggleMainLoader } from '../actions';
import SidebarMenu from '../components/SidebarMenu';
import { name as title } from '../../package.json';

const mapStateToProps = (state) => {
  return Object.assign({}, state.managementSidebarMenu, {
    title: title
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClick: (id) => {
      dispatch(selectMenuItem(id));
      dispatch(toggleMainLoader());
    },
    onToggleMenuClick: () => {
      dispatch(toggleMenu());
    }
  };
};

const ManagementSidebarMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarMenu);

export default ManagementSidebarMenu;
