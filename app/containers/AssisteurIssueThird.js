import { connect } from 'react-redux';
import IssueStep from '../components/AssisteurIssueThird';

const mapStateToProps = (state) => {
  return state.assisteur.moving;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onValidation: (data) => {
      // dispatch(login(data));
    }
  };
};

const AssisteurIssueThird = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueStep);

export default AssisteurIssueThird;
