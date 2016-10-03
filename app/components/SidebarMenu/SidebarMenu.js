import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import './SidebarMenu.scss';

export default class SidebarMenu extends React.Component {
  static propTypes = {
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
        >
          <AppBar
            iconClassNameRight='muidocs-icon-navigation-expand-more'
            onClick={() => this.props.onToggleMenuClick()}
          />
          <Menu>
            {this.props.menus.map(menu =>
              <Link
                to={menu.link}
                activeClassName='link'
              >
                <MenuItem
                  key={menu.id}
                  checked={menu.selected}
                  primaryText={menu.text}
                />
              </Link>
            )}
          </Menu>
        </Drawer>
      </div>
    );
  }
}
