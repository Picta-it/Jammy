import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidebarMenu from '../../containers/AcheteurSidebarMenu';
import MainTitleBar from '../../containers/MainTitleBar';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import './CoreAcheteur.scss';
import '../../styles/core.scss';

var loadBarStyle = (show) => {
  return {
    'visibility': show ? '' : 'hidden'
  };
};

export class CoreAcheteur extends React.Component {
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

        <div className='page main-page'>
          <Link to={`/acheteur/todo/`}>
            <Badge className="acheteur-badge" badgeContent={4} primary={true}>
              <NotificationsIcon />
            </Badge>
          </Link>
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}

export default CoreAcheteur;
