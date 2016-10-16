import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import Layout from '../components/AcheteurTodo';

const mapStateToProps = (state) => {
  return state.acheteur.todo;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      browserHistory.push('/acheteur/task/'+id);
    }
  };
};

const AcheteurTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);

export default AcheteurTodo;
