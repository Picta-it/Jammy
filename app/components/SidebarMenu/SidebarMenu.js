import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import CustomMenuItem from '../CustomMenuItem';
import './SidebarMenu.scss';

var menuStyle = {
  'overflow': 'hidden'
};

export default class SidebarMenu extends React.Component {
  static propTypes = {
    title:              PropTypes.string.isRequired,
    opened:             PropTypes.bool.isRequired,
    menus:              PropTypes.arrayOf(PropTypes.shape({
      id:                 PropTypes.number.isRequired,
      text:               PropTypes.string.isRequired,
      selected:           PropTypes.bool.isRequired
    }).isRequired).isRequired,
    onMenuClick:        PropTypes.func.isRequired,
    onToggleMenuClick:  PropTypes.func.isRequired
  };

  render () {
    return (
      <div>
        <Drawer
          docked={true}
          width={200}
          open={this.props.opened}
          onRequestChange={() => this.props.onToggleMenuClick()}
          containerStyle={menuStyle}
        >
          <AppBar
            title={this.props.title}
            iconClassNameLeft='fa fa-rocket'
            onClick={() => this.props.onToggleMenuClick()}
          />
          <Menu>
            {this.props.menus.map(menu =>
              <CustomMenuItem
                key={menu.id}
                id={menu.id}
                text={menu.text}
                link={menu.link}
                icon={menu.icon}
              />
            )}
          </Menu>
        </Drawer>
      </div>
    );
  }
}
