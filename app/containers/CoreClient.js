import { connect } from 'react-redux';
import Layout from '../components/CoreClient';

const mapStateToProps = (state) => {
  return state.status;
};

const CoreClient = connect(
  mapStateToProps
)(Layout);

export default CoreClient;
