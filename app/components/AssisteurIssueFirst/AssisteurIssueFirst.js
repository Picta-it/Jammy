import React, { PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';

export default class AssisteurIssueFirst extends React.Component {
  static propTypes = {
  };

  handleKeyPress (event) {
    if (event.key === 'Enter') {
      this.onValidation({});
    }
  }

  render () {
    return (
      <Paper className='page' style={{ marginLeft: '10px' }}>
        <div className='column-container' style={{display: 'flex'}}>
          <Paper className='page left-column' style={{ paddingLeft: '10px', float: 'none' }}>
            <h3 className='separator'>Appelant</h3>
            <Divider />
            <TextField
              className='issue-field half'
              hintText='Nom appelant'
              floatingLabelText='Nom appelant'
              onKeyPress={(event) => this.handleKeyPress(event)}
              name='nom-appelant'
              ref='nom-appelant'
              value='Jacqueline Dupond'
            />
            <TextField
              className='issue-field half'
              hintText='Téléphone'
              floatingLabelText='Téléphone'
              onKeyPress={(event) => this.handleKeyPress(event)}
              name='telephone'
              ref='telephone'
              value='06 06 06 06 06'
            />
            <h3 className='separator'>Nom conducteur</h3>
            <Divider />
            <TextField
              className='issue-field half'
              hintText='VIN/Immat'
              floatingLabelText='VIN/Immat'
              onKeyPress={(event) => this.handleKeyPress(event)}
              name='immat'
              ref='immat'
              value='NF-756-NF'
            />
            <TextField
              className='issue-field half'
              hintText='Nom conducteur'
              floatingLabelText='Nom conducteur'
              onKeyPress={(event) => this.handleKeyPress(event)}
              name='nom-conducteur'
              ref='nom-conducteur'
              value='Pierre Dupond'
            />
            <TextField
              className='issue-field full'
              hintText='Société, Entreprise, Association'
              floatingLabelText='Société, Entreprise, Association'
              onKeyPress={(event) => this.handleKeyPress(event)}
              name='company'
              ref='company'
            />
            <h3 className='separator'>Produit d'assistance</h3>
            <Divider />
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Garantie constructeur' primaryText='...' />
              <MenuItem label='Garantie constructeur' primaryText='Garantie constructeur' />
            </SelectField>
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Garantie constructeur' primaryText='...' />
              <MenuItem label='Garantie constructeur' primaryText='Garantie constructeur' />
            </SelectField>
            <h3 className='separator'>Client d'IMA - Nature d'assistance</h3>
            <Divider />
            <SelectField
              className='issue-field half'
            >
              <MenuItem label="Client d'IMA" primaryText='...' />
              <MenuItem label="Client d'IMA" primaryText='Garantie constructeur' />
            </SelectField>
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Nature Assurance' primaryText='...' />
              <MenuItem label='Nature Assurance' primaryText='Garantie constructeur' />
            </SelectField>
          </Paper>
          <Paper className='page right-column' style={{ paddingLeft: '10px', float: 'none' }}>
            <h3 className='separator'>Cause d'intervention</h3>
            <Divider />
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Cause' primaryText='...' />
              <MenuItem label='Cause' primaryText='Garantie constructeur' />
            </SelectField>
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Détail cause' primaryText='...' />
              <MenuItem label='Détail cause' primaryText='Garantie constructeur' />
            </SelectField>
            <DatePicker
              hintText='Date de survenance'
              className='issue-field half'
            />
            <TimePicker
              format='24hr'
              hintText='Heure'
              className='issue-field third'
            />
            <h3 className='separator'>Localisation</h3>
            <Divider />
            <TextField
              className='issue-field full'
              hintText='Adresse'
              floatingLabelText='Adresse'
              onKeyPress={(event) => this.handleKeyPress(event)}
              name='adresse'
              ref='adresse'
            />
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Ville' primaryText='...' />
              <MenuItem label='Ville' primaryText='Garantie constructeur' />
            </SelectField>
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Pays' primaryText='...' />
              <MenuItem label='Pays' primaryText='Garantie constructeur' />
            </SelectField>
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Région' primaryText='...' />
              <MenuItem label='Région' primaryText='Garantie constructeur' />
            </SelectField>
          </Paper>
        </div>
      </Paper>
    );
  }
}
