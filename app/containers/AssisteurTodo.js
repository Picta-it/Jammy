import { connect } from 'react-redux';
import Todo from '../components/AssisteurTodo';

const mapStateToProps = (state) => {
  return state.assisteur.todo;
};

const AssisteurTodo = connect(
  mapStateToProps
)(Todo);

export default AssisteurTodo;
