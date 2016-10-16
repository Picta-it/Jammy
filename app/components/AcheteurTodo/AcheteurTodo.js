import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { darkBlack } from 'material-ui/styles/colors';
import MenuIconFactory from '../../services/MenuIconFactory';
import './AcheteurTodo.scss';

class AcheteurTodo extends React.Component {
  static propTypes = {
    fetching:     PropTypes.bool.isRequired,
    error:        PropTypes.string,
    response:     React.PropTypes.shape({
      todos:        PropTypes.string
    }).isRequired,
    onTodoClick: PropTypes.func.isRequired
  }

  todo (id) {
    this.props.onTodoClick(id);
  };

  render () {
    var self = this;

    var todos = this.props.response.todos;
    var todosList = todos.map(function (aTodo) {
      return (<span>
        <ListItem
          leftAvatar={MenuIconFactory.build(aTodo.type)}
          primaryText={aTodo.title}
          secondaryText={
            <p>
              <span style={{ color: darkBlack }}>{aTodo.type}</span> --
              {aTodo.description}
            </p>
          }
          secondaryTextLines={2}
          onClick={() => self.todo(aTodo.id)}
        />
        <Divider inset />
        </span>
      );
    });
    return (
      <div>
      <h2 style={{ marginLeft: '20px' }}>TODO</h2>
      <List>
        {todosList}
      </List>
      </div>
    );
  }
}

export default AcheteurTodo;
