import { Component } from 'react';

export default class User extends Component {

	constructor(props) {
  super(props);
	}

  render() {
    return (
      <div>
        <span>{this.props.name}</span>
        <span>{this.props.lat}</span>
        <span>{this.props.lng}</span>
        <span>{this.props.location}</span>
      </div>
    );
  }

}
