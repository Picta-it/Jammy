import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidebarMenu from '../../containers/AvailableSidebarMenu';
import MainTitleBar from '../../containers/MainTitleBar';
import DevTools from '../../containers/DevTools';
import './CoreLayout.scss';
import '../../styles/core.scss';

export class CoreLayout extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <MainTitleBar />
        <SidebarMenu />
        <Header />

        <Footer />
        <DevTools />
      </div>
    );
  }
}

export default CoreLayout;
