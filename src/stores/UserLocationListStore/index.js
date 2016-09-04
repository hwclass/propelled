import { observable, action } from 'mobx';
import { forEach } from 'lodash';

class UserLocationListStore {

  @observable locationList;

  constructor() {
    this.locationList = [];
  }

  @action setLocationList(locationList) {
    forEach(locationList, (item) => this.locationList.push(item));
  }

}

export default new UserLocationListStore();
export { UserLocationListStore };
