import { observable, action } from 'mobx';
import { forEach, remove, isUndefined } from 'lodash';
import { DEFAULT_ANIMATION, ZOOM } from '../../constants/map';

class UserLocationListStore {

  @observable locationList;

  constructor() {
    this.locationList = [];
    this.defaultAnimation = DEFAULT_ANIMATION;
    this.zoom = ZOOM;
  }

  @action setLocationList(locationList) {
    this.removeLocationListItems();
    forEach(locationList, (item) => {
      this.locationList.push({
        key: item.key,
        name: item.name,
        lat: parseFloat(item.position.lat).toString(),
        lng: parseFloat(item.position.lng).toString(),
        location: item.location,
        defaultAnimation: this.defaultAnimation,
        zoom: this.zoom
      });
    });
  }

  @action
  addUser(user) {
    this.locationList.push(user);
  }

  @action
  removeLocationListItems() {
    remove(this.locationList, !isUndefined);
  }

}

export default new UserLocationListStore();

export { UserLocationListStore };
