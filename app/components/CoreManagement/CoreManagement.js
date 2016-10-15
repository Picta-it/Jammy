import React, { PropTypes } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidebarMenu from '../../containers/ManagementSidebarMenu';
import MainTitleBar from '../../containers/MainTitleBar';
import DevTools from '../../containers/DevTools';
import './CoreManagement.scss';
import '../../styles/core.scss';

var loadBarStyle = (show) => {
  return {
    'visibility': show ? '' : 'hidden'
  };
};

export class CoreManagement extends React.Component {
  static propTypes = {
    loading:  PropTypes.bool.isRequired
  };

  render () {
    return (
      <div className='container text-center'>
        <div className='load-bar' style={loadBarStyle(this.props.loading)}>
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
        </div>
        <MainTitleBar />
        <SidebarMenu />
        <Header />

        <div className='page'>
          <h1>Manangement</h1>
          {this.props.children}
        </div>

        <Footer />
        <DevTools />
      </div>
    );
  }
}

export default CoreManagement;
