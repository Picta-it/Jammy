import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import './AssisteurTodo.scss';

export default class AssisteurTodo extends React.Component {
  static propTypes = {
  };

  render () {
    return (
      <div>
        <List>
          <ListItem
            primaryText='6 Novembre 2016'
            secondaryText='120 logements - '
          />
          <ListItem
            primaryText='(323) 555 - 6789'
            secondaryText='Work'
          />
        </List>
      </div>
    );
  }
}
