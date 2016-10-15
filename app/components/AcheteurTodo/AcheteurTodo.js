import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors'
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import './AcheteurTodo.scss';
import fetch from 'isomorphic-fetch'


class AcheteurTodo extends React.Component {
  static propTypes = {
    error:        PropTypes.string,
    onTodoClick: PropTypes.func.isRequired
  }

  todo (id) {
    this.props.onTodoClick(id);
  };

  render () {
    var self= this
    var todos = [
      {"id":1, "type":"night", "title":"Réservation chambres", "date":"01/12/2016", "description":"Barcelone pendant 3 jours"},
      {"id":2, "type":"night", "title":"Réservation chambres", "date":"04/12/2016", "description":"Paris pendant 1 jour"},
      {"id":3, "type":"night", "title":"Réservation chambres", "date":"15/12/2016", "description":"Bordeaux pendant 5 jours"},
      {"id":4, "type":"car", "title":"Réservation voiture de location", "date":"26/12/2016", "description":"Bordeaux pendant 10 jours"}
    ]
    var todosList = todos.map(function(aTodo){
      return (<span key={aTodo.id}>
        <ListItem
          leftAvatar={<Avatar src={require("./images/"+aTodo.type+".png")} />}
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
      <h2>TODO</h2>
      <List>
        {todosList}
      </List>
      </div>
    );
  }
}

export default AcheteurTodo;
