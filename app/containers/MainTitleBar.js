import { connect } from 'react-redux';
import { toggleMenu } from '../actions';
import { logout } from '../actions/login';
import TitleBar from '../components/TitleBar';
import { name as title } from '../../package.json';
import { browserHistory } from 'react-router';

const mapStateToProps = (state) => {
  return {
    title: title
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLeftIconButtonTouchTap: () => {
      dispatch(toggleMenu());
    },
    onTitleTouchTap : () => {
      browserHistory.push('/');
    },
    onAvatarTouchTap : () => {
      dispatch(logout());
    }
  };
};

const MainTitleBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar);

export default MainTitleBar;
