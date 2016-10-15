import React, { PropTypes } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidebarMenu from '../../containers/AvailableSidebarMenu';
import MainTitleBar from '../../containers/MainTitleBar';
import DevTools from '../../containers/DevTools';
import './CoreClient.scss';
import '../../styles/core.scss';

var loadBarStyle = (show) => {
  return {
    'visibility': show ? '' : 'hidden'
  };
};

export class CoreClient extends React.Component {
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
          <h1>CLIENT</h1>
          {this.props.children}
        </div>

        <Footer />
        <DevTools />
      </div>
    );
  }
}

export default CoreClient;
