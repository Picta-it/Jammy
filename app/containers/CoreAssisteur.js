import { connect } from 'react-redux';
import Layout from '../components/CoreAssisteur';

const mapStateToProps = (state) => {
  return state.status;
};

const CoreAssisteur = connect(
  mapStateToProps
)(Layout);

export default CoreAssisteur;
