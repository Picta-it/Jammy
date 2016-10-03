import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import './TitleBar.scss';

export default class TitleBar extends React.Component {
  static propTypes = {
    title:                     PropTypes.string.isRequired,
    onLeftIconButtonTouchTap:  PropTypes.func.isRequired
  };

  render () {
    return (
      <AppBar
        title={this.props.title}
        iconClassNameRight='muidocs-icon-navigation-expand-more'
        onLeftIconButtonTouchTap={() => this.props.onLeftIconButtonTouchTap()}
        onTitleTouchTap={() => this.props.onTitleTouchTap()}
      />
    );
  }
}
