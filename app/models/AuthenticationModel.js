import { ActiveRecordBasisModel } from './BasisModels';

export default class AuthenticationModel extends ActiveRecordBasisModel {
  constructor (credentials) {
    super();

    this.username = credentials.username;
    this.password = credentials.password;
  }

  create () {
    let randomDelay = Math.random() * 1500;

    let deferred = new Promise((resolve, reject) => {
      if (this.username === 'john' && this.password === 'pouet') {
        let fakeResult = { token: 'pouet pouet' };
        let token = fakeResult.token;

        this.persisted = true;
        this.token = token;
        localStorage.token = token;

        setTimeout(resolve, randomDelay, fakeResult);
      } else {
        let fakeResult = { error: 'L\'authentification a echoué' };

        setTimeout(reject, randomDelay, fakeResult);
      }
    });

    return deferred;
  }
}
