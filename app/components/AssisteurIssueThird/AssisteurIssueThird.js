import React, { PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import './AssisteurIssueThird.scss';

export default class AssisteurIssueThird extends React.Component {
  static propTypes = {
  };

  handleKeyPress (event) {
    if (event.key === 'Enter') {
      this.onValidation({});
    }
  }

  render () {
    var self = this;
    var buys = [
      { 'etablissement':4, 'style': 'collaboratif', 'etablissementIcon':'blablacar', 'type':'car', 'name':'Blablacar', 'averagePrice':'68', 'description':"C'est trop de la balle Air BnB!!!" },
      { 'etablissement':2, 'style': 'collaboratif', 'etablissementIcon':'covoiturage-libre', 'type':'car', 'name':'CoVoiturage', 'averagePrice':'70', 'description':"C'est trop de la balle Air BnB!!!" },
      { 'etablissement':1, 'style': 'collaboratif', 'etablissementIcon':'blablacar', 'type':'car', 'name':'Blablacar', 'averagePrice':'71', 'description':"C'est trop de la balle Air BnB!!!" },
      { 'etablissement':3, 'style': 'collaboratif', 'etablissementIcon':'karzoo', 'type':'car', 'name':'Karzoo', 'averagePrice':'75', 'description':"C'est trop de la balle Air BnB!!!" },
      { 'etablissement':1, 'style': 'collaboratif', 'etablissementIcon':'rouler-malin', 'type':'car', 'name':'Rouler Malin', 'averagePrice':'76', 'description':"C'est trop de la balle Air BnB!!!" },
      { 'etablissement':5, 'style': 'collaboratif', 'etablissementIcon':'blablacar', 'type':'car', 'name':'Blablacar', 'averagePrice':'80', 'description':"C'est trop de la balle Air BnB!!!" },
      { 'etablissement':1, 'style': 'collaboratif', 'etablissementIcon':'blablacar', 'type':'car', 'name':'Blablacar', 'averagePrice':'50', 'description':"C'est trop de la balle Air BnB!!!" },
      { 'etablissement':1, 'style': 'collaboratif', 'etablissementIcon':'covoiturage-libre', 'type':'v', 'name':'CoVoiturage', 'averagePrice':'50', 'description':"C'est trop de la balle Air BnB!!!" },
      { 'etablissement':1, 'style': 'collaboratif', 'etablissementIcon':'covoiturage-libre', 'type':'car', 'name':'CoVoiturage', 'averagePrice':'50', 'description':"C'est trop de la balle Air BnB!!!" },
      { 'etablissement':1, 'style': 'collaboratif', 'etablissementIcon':'karzoo', 'type':'car', 'name':'Karzoo', 'averagePrice':'50', 'description':"C'est trop de la balle Air BnB!!!" },
      { 'etablissement':1, 'style': 'collaboratif', 'etablissementIcon':'karzoo', 'type':'car', 'name':'Karzoo', 'averagePrice':'50', 'description':"C'est trop de la balle Air BnB!!!" }
    ];
    var buyingList = buys.map(function (aBuy, index) {
      return (
        <Badge
          badgeContent={index < 4 ? 'R' : ''}
          primary={index < 4 ? true : false}
          key={index}
          style={{ width: '50%' }}
          badgeStyle={{ top: '15px', right: '15px' }}
        >
          <Card className={aBuy.style}>
            <CardHeader
              title={aBuy.name}
              subtitle={'Prix = ' + aBuy.averagePrice + ' €'}
              actAsExpander
              expandable={false}
              showExpandableButton={false}>
              <img src={require('./icons/' + aBuy.etablissementIcon + '.png')} className='icone' />
            </CardHeader>
            <CardActions>
              <FlatButton label='Réserver' />
              <FlatButton label="Plus d'infos" />
            </CardActions>
            <CardText expandable>
              <p>{aBuy.description}</p>
            </CardText>
          </Card>
        </Badge>
      );
    });
    return (
      <Paper className='page' style={{ marginLeft: '10px', paddingTop: '15px' }}>
        {buyingList}
      </Paper>
    );
  }
}
