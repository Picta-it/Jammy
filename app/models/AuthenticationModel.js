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
      if (this.username === 'ami' && this.password === 'pouet') {
        let fakeResult = {
          url: '/ami/',
          data: {
            token: 'pouet pouet'
          }
        };
        let token = fakeResult.token;

        this.persisted = true;
        this.token = token;
        localStorage.token = token;

        setTimeout(resolve, randomDelay, fakeResult);
      } else if (this.username === 'client' && this.password === 'pouet') {
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
      } else if (this.username === 'depanneur' && this.password === 'pouet') {
        let fakeResult = {
          url: '/depanneur/',
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
