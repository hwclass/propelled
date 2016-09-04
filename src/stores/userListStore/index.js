import { observable, map } from 'mobx';
// import { forEach } from 'lodash';

class UserListStore {

  @observable userList = [{
    name: 'Harry Potter',
    lat: '45.35262',
    lng: '-30.436',
    location: 'Test Location'
  }, {
    name: 'Laçin İrem Salgırtay Güler',
    lat: '56.7856',
    lng: '22.53777',
    location: 'Same Location'
  }];

  constructor() {
    this.activitiesByGenre = map({});
  }

}

const userListStore = new UserListStore();

export default userListStore;
export { UserListStore };
