export class Authentication {
  static isLogged (user) {
    return !!localStorage.token;
  };

  constructor (options) {
    this.credentials = {
      login: options.login,
      password: options.password
    };
  }

  login () {
    localStorage.token = 'pouet pouet';
  }

  logout () {
    delete localStorage.token;
  }

  getToken () {
    return localStorage.token;
  }
}
