import { connect } from 'react-redux';
import Layout from '../components/CoreLayout';

const mapStateToProps = (state) => {
  return state.status;
};

const CoreLayout = connect(
  mapStateToProps
)(Layout);

export default CoreLayout;
