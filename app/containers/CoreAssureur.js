import { connect } from 'react-redux';
import Layout from '../components/CoreAssureur';

const mapStateToProps = (state) => {
  return state.status;
};

const CoreAssureur = connect(
  mapStateToProps
)(Layout);

export default CoreAssureur;
