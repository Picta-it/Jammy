import { connect } from 'react-redux';
import { login } from '../actions/login';
import LoginComponent from '../components/Login';

const mapStateToProps = (state) => {
  return state.authentication;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (username, password) => {
      dispatch(login(username, password));
    }
  };
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default Login;
