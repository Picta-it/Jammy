import AuthenticationModel from '../models/AuthenticationModel';

export default class Authentication {
  static isLogged () {
    return !!localStorage.token;
  };

  constructor (options) {
    this.credentials = {
      username: options.username,
      password: options.password
    };
  }

  login () {
    let authentication = new AuthenticationModel(this.credentials);

    return authentication.save();
  }

  static logout () {
    let deferred = new Promise((resolve, reject) => {
      delete localStorage.token;
      resolve(undefined);
    });

    return deferred;
  }

  getToken () {
    return localStorage.token;
  }
}
