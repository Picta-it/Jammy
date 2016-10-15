import { connect } from 'react-redux';
import IssueStep from '../components/AssisteurIssueSecond';

const mapStateToProps = (state) => {
  return state.assisteur.accomodation;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onValidation: (data) => {
      // dispatch(login(data));
    }
  };
};

const AssisteurIssueSecond = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueStep);

export default AssisteurIssueSecond;
