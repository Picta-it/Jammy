import { connect } from 'react-redux';
import Issue from '../components/AssisteurIssue';

const mapStateToProps = (state) => {
  return state.assisteur.issue;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onValidation: (data) => {
      // dispatch(login(data));
    }
  };
};

const AssisteurIssue = connect(
  mapStateToProps,
  mapDispatchToProps
)(Issue);

export default AssisteurIssue;
