export class ActiveRecordBasisModel {
  constructor () {
    this.persisted = false;
  }

  create () {
    return new Promise((resolve, reject) => {
      reject('You must define the `create` method of your Model.');
    });
  }

  show () {
    return new Promise((resolve, reject) => {
      reject('You must define the `show` method of your Model.');
    });
  }

  update () {
    return new Promise((resolve, reject) => {
      reject('You must define the `update` method of your Model.');
    });
  }

  destroy () {
    return new Promise((resolve, reject) => {
      reject('You must define the `destroy` method of your Model.');
    });
  }

  list () {
    return new Promise((resolve, reject) => {
      reject('You must define the `list` method of your Model.');
    });
  }

  save () {
    if (this.persisted) {
      return this.update();
    } else {
      return this.create();
    }
  }
}
