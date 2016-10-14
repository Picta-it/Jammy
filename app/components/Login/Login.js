import React, { PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardMedia } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import './Login.scss';

class Login extends React.Component {
  static propTypes = {
    fetching:     PropTypes.bool.isRequired,
    error:        PropTypes.string,
    response:     React.PropTypes.shape({
      token:        PropTypes.string
    }).isRequired,
    onLoginClick: PropTypes.func.isRequired
  }

  login () {
    let login = this.refs.login.getValue();
    let password = this.refs.password.getValue();

    this.props.onLoginClick(login, password);
  };

  handleKeyPress (event) {
    if (event.key === 'Enter') {
      this.login();
    }
  }

  render () {
    return (
      <div className='card-container'>
        <Card className='card' zDepth={5}>
          <CardHeader
            className='card-header'
            title='Connexion'
            subtitle='Jammy - Make it swing'
          />
          <CardMedia className='card-media'>
            <TextField
              hintText='Doctor'
              floatingLabelText='Votre pseudo'
              onKeyPress={(event) => this.handleKeyPress(event)}
              name='login'
              ref='login'
            /><br />
            <TextField
              hintText='Who'
              floatingLabelText='Votre mot de passe'
              type='password'
              ref='password'
              onKeyPress={(event) => this.handleKeyPress(event)}
              errorText={this.props.error}
            />
          </CardMedia>
          <CardActions className='card-actions'>
            <FlatButton label='Login' onClick={() => this.login()} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Login;
