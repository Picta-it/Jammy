import { connect } from 'react-redux';
import { toggleMenu } from '../actions';
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
    }
  };
};

const MainTitleBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar);

export default MainTitleBar;
