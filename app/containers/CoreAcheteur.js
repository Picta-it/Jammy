import { connect } from 'react-redux';
import Layout from '../components/CoreAcheteur';

const mapStateToProps = (state) => {
  return state.status;
};

const CoreAcheteur = connect(
  mapStateToProps
)(Layout);

export default CoreAcheteur;
