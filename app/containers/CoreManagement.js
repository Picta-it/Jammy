import { connect } from 'react-redux';
import Layout from '../components/CoreManagement';

const mapStateToProps = (state) => {
  return state.status;
};

const CoreManagement = connect(
  mapStateToProps
)(Layout);

export default CoreManagement;
