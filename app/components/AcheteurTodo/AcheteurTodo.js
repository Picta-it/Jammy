import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors'
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import MenuIconFactory from '../../services/MenuIconFactory';
import './AcheteurTodo.scss';


class AcheteurTodo extends React.Component {
  static propTypes = {
    fetching:     PropTypes.bool.isRequired,
    error:        PropTypes.string,
    response:     React.PropTypes.shape({
      token:        PropTypes.string
    }).isRequired,
    onTodoClick: PropTypes.func.isRequired
  }

  todo (id) {
    this.props.onTodoClick(id);
  };

  render () {
    var self= this
    var todos = [
      {id:1, "type":"night", "title":"Réservation chambres", "date":"01/12/2016", "description":"Barcelone pendant 3 jours"},
      {id:2, "type":"night", "title":"Réservation chambres", "date":"04/12/2016", "description":"Paris pendant 1 jour"},
      {id:3, "type":"night", "title":"Réservation chambres", "date":"15/12/2016", "description":"Bordeaux pendant 5 jours"},
      {id:4, "type":"car", "title":"Réservation voiture de location", "date":"26/12/2016", "description":"Bordeaux pendant 10 jours"}
      ]
    var todosList = todos.map(function(aTodo){
      return (<span>
        <ListItem
          leftAvatar={MenuIconFactory.build(aTodo.type)}
          primaryText={aTodo.title}
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>{aTodo.type}</span> --
              {aTodo.description}
            </p>
          }
          secondaryTextLines={2}
          onClick={() => self.todo(aTodo.id)}
        />
        <Divider inset={true} />
        </span>
      )
    })
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
