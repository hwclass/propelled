import { observable, action } from 'mobx';
import { forEach, remove, isUndefined } from 'lodash';

class UserLocationListStore {

  @observable locationList;

  constructor() {
    this.locationList = [];
    this.defaultAnimation = 2;
    this.zoom = 1;
  }

  @action setLocationList(locationList) {
    this.removeLocationListItems();
    forEach(locationList, (item) => {
      this.locationList.push({
        key: item.key,
        name: item.name,
        lat: parseFloat(item.position.lat),
        lng: parseFloat(item.position.lng),
        location: item.location,
        defaultAnimation: this.defaultAnimation,
        zoom: this.zoom
      });
    });
  }

  @action
  removeLocationListItems() {
    remove(this.locationList, !isUndefined);
  }

}

export default new UserLocationListStore();

export { UserLocationListStore };
