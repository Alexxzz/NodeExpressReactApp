import { observable } from 'mobx';

class MallsStorage {
  @observable malls = [];

  addMall(mall) {
    this.malls.push(mall);
    console.log('Malls length: ', this.malls.length);
  }
}

export default MallsStorage;
