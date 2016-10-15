import { connect } from 'react-redux';
import Layout from '../components/CoreDepanneur';

const mapStateToProps = (state) => {
  return state.status;
};

const CoreDepanneur = connect(
  mapStateToProps
)(Layout);

export default CoreDepanneur;
