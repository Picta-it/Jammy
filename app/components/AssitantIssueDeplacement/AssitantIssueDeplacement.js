import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import './AssitantIssueDeplacement.scss';


class AssitantIssueDeplacement extends React.Component {
  static propTypes = {
    error:        PropTypes.string,
  }

  reservation (id) {
  };

  render () {
    var self= this
    var buys = [
      {"etablissement":4, "etablissementIcon":"blablacar", "type":"car", "name":"Blablacar", "averagePrice":"68", "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":2, "etablissementIcon":"covoiturage-libre", "type":"car", "name":"CoVoiturage", "averagePrice":"70", "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"blablacar", "type":"car", "name":"Blablacar", "averagePrice":"71", "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":3, "etablissementIcon":"karzoo", "type":"car", "name":"Karzoo", "averagePrice":"75", "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"rouler-malin", "type":"car", "name":"Rouler Malin", "averagePrice":"76", "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":5, "etablissementIcon":"blablacar", "type":"car", "name":"Blablacar", "averagePrice":"80", "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"blablacar", "type":"car", "name":"Blablacar", "averagePrice":"50", "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"covoiturage-libre", "type":"v", "name":"CoVoiturage", "averagePrice":"50", "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"covoiturage-libre", "type":"car", "name":"CoVoiturage", "averagePrice":"50", "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"karzoo", "type":"car", "name":"Karzoo", "averagePrice":"50", "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"karzoo", "type":"car", "name":"Karzoo", "averagePrice":"50", "description":"C'est trop de la balle Air BnB!!!"},
      ]
    var buyingList = buys.map(function(aBuy, index){
      return (
        <Badge badgeContent={index<4?"R":""} primary={index<4?true:false} key={index}>
          <Card >
            <CardHeader
              title={aBuy.name}
              subtitle={"Prix = "+aBuy.averagePrice+" €"}
              actAsExpander={true}
              showExpandableButton={false}>
              <img src={require("./icons/"+aBuy.etablissementIcon+".png")} className="icone" />
            </CardHeader>
            <CardActions>
              <FlatButton label="Réserver" />
              <FlatButton label="Plus d'infos" />
            </CardActions>
            <CardText expandable={true}>
              <p>{aBuy.description}</p>
            </CardText>
          </Card>
        </Badge>
      )
    })
    return (
      <div>
        <h2>Disponibilités des modes de déplacement :</h2>
        {buyingList}
      </div>
    );
  }
}

export default AssitantIssueDeplacement;
