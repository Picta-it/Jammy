import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
// import Avatar from 'material-ui/Avatar';
import './TitleBar.scss';

// var avatar = <Avatar
//   src='https://avatars3.githubusercontent.com/u/2240017?v=3&s=466'
//   onTouchTap={() => this.props.onAvatarTouchTap()}
// />;

export default class TitleBar extends React.Component {
  static propTypes = {
    title:                     PropTypes.string.isRequired,
    onLeftIconButtonTouchTap:  PropTypes.func.isRequired,
    onAvatarTouchTap:          PropTypes.func.isRequired,
    onTitleTouchTap:           PropTypes.func.isRequired
  };

  render () {
    return (
      <AppBar
        title={this.props.title + ' - Dashboard'}
        iconClassNameLeft='fa fa-rocket'
        iconClassNameRight='fa fa-sign-out'
        onLeftIconButtonTouchTap={() => this.props.onLeftIconButtonTouchTap()}
        onRightIconButtonTouchTap={() => this.props.onAvatarTouchTap()}
      />
    );
  }
}
