import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/AcheteurTask';

const mapStateToProps = (state) => {
  return state.status;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onReservationClick: (id) => {
      console.log("Reservation["+id+"]")
    }
  };
};

const AcheteurTask = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);

export default AcheteurTask;
