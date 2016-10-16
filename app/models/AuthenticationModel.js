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
      if (this.username === 'analyste' && this.password === 'pouet') {
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
      } else if (this.username === 'acheteur' && this.password === 'pouet') {
        let fakeResult = {
          url: '/acheteur/',
          data: {
            token: 'pouet pouet'
          }
        };
        let token = fakeResult.token;

        this.persisted = true;
        this.token = token;
        localStorage.token = token;

        setTimeout(resolve, randomDelay, fakeResult);
      } else if (this.username === 'assisteur' && this.password === 'pouet') {
        let fakeResult = {
          url: '/assisteur/',
          data: {
            token: 'pouet pouet'
          }
        };
        console.log(fakeResult);
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
