import { observable, map } from 'mobx';
// import { forEach } from 'lodash';

class UserListStore {

  @observable userList;

  constructor() {
    this.activitiesByGenre = map({});
  }

}

const userListStore = new UserListStore();

export default userListStore;
export { UserListStore };
