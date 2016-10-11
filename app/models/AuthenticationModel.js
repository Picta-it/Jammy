export default class AuthenticationModel {
  constructor (credentials) {
    this.username = credentials.username;
    this.password = credentials.password;
  }

  create () {
    let deferred = new Promise((resolve, reject) => {
      if (this.username === 'john' && this.password === 'pouet') {
        let fakeResult = { token: 'pouet pouet' };

        localStorage.token = fakeResult.token;
        resolve(fakeResult);
      } else {
        let fakeResult = { error: 'L\'authentification a echoué' };

        reject(fakeResult);
      }
    });

    return deferred;
  }
}
