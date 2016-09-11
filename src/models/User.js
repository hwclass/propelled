import {observable} from 'mobx';

export default class User {
		
  constructor(name) {
    super();
    this.name = name;
  }

  toJS() {
  	return {
  		name: this.name
  	};
  }

  static fromJS(object) {
  	return new User(object.name);
  }

}