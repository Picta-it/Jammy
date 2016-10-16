import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import './AssisteurIssueSecond.scss';

export default class AssisteurIssueSecond extends React.Component {
  static propTypes = {
  };

  handleKeyPress (event) {
    if (event.key === 'Enter') {
      this.onValidation({});
    }
  }

  render () {
      var self= this
      var buys = [
        {"etablissement":4, "style": "collaboratif" ,"etablissementIcon":"misterbnb", "type":"night", "name":"Mister BnB", "averagePrice":"68", "capacity":5, "description":"C'est trop de la balle Air BnB!!!"},
        {"etablissement":2, "style": "professionel" ,"etablissementIcon":"booking", "type":"night", "name":"Booking", "averagePrice":"70", "capacity":8, "description":"C'est trop de la balle Air BnB!!!"},
        {"etablissement":1, "style": "professionel" ,"etablissementIcon":"booking", "type":"night", "name":"Booking", "averagePrice":"71", "capacity":4, "description":"C'est trop de la balle Booking!!!"},
        {"etablissement":3, "style": "collaboratif" ,"etablissementIcon":"guesttoguest", "type":"night", "name":"Guest To Guest", "averagePrice":"75", "capacity":3, "description":"C'est trop de la balle Booking!!!"},
        {"etablissement":1, "style": "professionel" ,"etablissementIcon":"booking", "type":"night", "name":"Booking", "averagePrice":"76", "capacity":2, "description":"C'est trop de la balle Booking!!!"},
        {"etablissement":5, "style": "collaboratif" ,"etablissementIcon":"gamping", "type":"night", "name":"Gamping", "averagePrice":"80", "capacity":2, "description":"C'est trop de la balle Air BnB!!!"},
        {"etablissement":1, "style": "collaboratif" ,"etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"50", "capacity":2, "description":"C'est trop de la balle Air BnB!!!"},
        {"etablissement":1, "style": "collaboratif" ,"etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"50", "capacity":2, "description":"C'est trop de la balle Air BnB!!!"},
        {"etablissement":1, "style": "collaboratif" ,"etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"50", "capacity":2, "description":"C'est trop de la balle Air BnB!!!"},
        {"etablissement":1, "style": "collaboratif" ,"etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"50", "capacity":2, "description":"C'est trop de la balle Air BnB!!!"},
        {"etablissement":1, "style": "collaboratif" ,"etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"50", "capacity":2, "description":"C'est trop de la balle Air BnB!!!"},
        ]
      var buyingList = buys.map(function(aBuy, index){
        return (
          <Badge
            badgeContent={index<2?"R":""}
            primary={index<2?true:false}
            key={index}
            style={{ width: '50%' }}
            badgeStyle={{ top: '15px', right: '15px' }}
          >
            <Card className={aBuy.style}>
              <CardHeader
                title={aBuy.name}
                subtitle={"Prix moyen = "+aBuy.averagePrice+" €"}
                actAsExpander={true}
                expandable={false}
                showExpandableButton={false}>
                <img src={require("./icons/"+aBuy.etablissementIcon+".png")} className="icone" />
              </CardHeader>
              <CardActions>
                <FlatButton label="Réserver" />
                <FlatButton label="Plus d'infos" />
              </CardActions>
              <CardText expandable={true}>
                Capacité : {aBuy.capacity}
                <p>{aBuy.description}</p>
              </CardText>
            </Card>
          </Badge>
        )
      })
      return (
        <Paper className='page' style={{ marginLeft: '10px', paddingTop: '15px' }}>
          {buyingList}
        </Paper>
      );
  }
}
