import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/AcheteurTodo';

const mapStateToProps = (state) => {
  return state.status;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      console.log("Todo["+id+"]")
    }
  };
};

const AcheteurTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);

export default AcheteurTodo;
