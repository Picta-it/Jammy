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
      if (this.username === 'management' && this.password === 'pouet') {
        let fakeResult = {
          url: '/management/',
          data: {
            token: 'pouet pouet'
          }
        };
        let token = fakeResult.token;

        this.persisted = true;
        this.token = token;
        localStorage.token = token;

        setTimeout(resolve, randomDelay, fakeResult);
      } else if (this.username === 'beneficiaire' && this.password === 'pouet') {
        let fakeResult = {
          url: '/client/',
          data: {
            token: 'pouet pouet'
          }
        };
        let token = fakeResult.token;

        this.persisted = true;
        this.token = token;
        localStorage.token = token;

        setTimeout(resolve, randomDelay, fakeResult);
      } else if (this.username === 'prestataire' && this.password === 'pouet') {
        let fakeResult = {
          url: '/prestataire/',
          data: {
            token: 'pouet pouet'
          }
        };
        let token = fakeResult.token;

        this.persisted = true;
        this.token = token;
        localStorage.token = token;

        setTimeout(resolve, randomDelay, fakeResult);
      } else if (this.username === 'assureur' && this.password === 'pouet') {
        let fakeResult = {
          url: '/assureur/',
          data: {
            token: 'pouet pouet'
          }
        };
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
