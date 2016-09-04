import { observable } from 'mobx';
// import { forEach } from 'lodash';

class UserListStore {

  @observable locationList;

  constructor() {
    this.locationList = [];
  }

  mergeUserList(locationList) {
    this.locationList = locationList;
  }

}

export default new UserListStore();
export { UserListStore };
