import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import MenuIconFactory from '../services/MenuIconFactory';

export default class CustomMenuItem extends React.Component {
  static propTypes = {
    id:   PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render () {
    return (
      <Link
        to={this.props.link}
        activeClassName='link'
      >
        <MenuItem
          key={`item-${this.props.id}`}
          primaryText={this.props.text}
          leftIcon={MenuIconFactory.build(this.props.icon)}
        />
      </Link>
    );
  }
};
