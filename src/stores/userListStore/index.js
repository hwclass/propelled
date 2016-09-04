import { observable, map } from 'mobx';
// import { forEach } from 'lodash';

class UserListStore {

  @observable userList = [{
    key: 13234234,
    name: 'Test User 1',
    position: {
      lat: parseFloat(41.063796),
      lng: parseFloat(28.997008)
    },
    location: 'UK, London',
    defaultAnimation: 2,
    zoom: 1
  }, {
    key: 13234235,
    name: 'Test User 2',
    position: {
      lat: parseFloat(51.815606),
      lng: parseFloat(-0.808400)
    },
    location: 'Turkey, İstanbul, Fulya, Ortaklar',
    defaultAnimation: 2,
    zoom: 1
  }, {
    key: 13234236,
    name: 'Harry Potter',
    position: {
      lat: parseFloat(43.913068),
      lng: parseFloat(26.457393)
    },
    location: 'Bulgaria, Zvanartsi',
    defaultAnimation: 2,
    zoom: 1
  }];

  constructor() {
    this.activitiesByGenre = map({});
  }

}

const userListStore = new UserListStore();

export default userListStore;
export { UserListStore };
