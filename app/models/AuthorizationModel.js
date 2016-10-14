export default class AuthorizationModel {
  create () {
    let randomDelay = Math.random() * 1000;

    let deferred = new Promise((resolve, reject) => {
      if (this.username) {
        let fakeResult = { token: 'pouet pouet' };

        localStorage.token = fakeResult.token;
        setTimeout(resolve, randomDelay, fakeResult);
      } else {
        let fakeResult = { error: 'L\'authentification a echoué' };

        setTimeout(reject, randomDelay, fakeResult);
      }
    });

    return deferred;
  }

  save () {

  }
}
