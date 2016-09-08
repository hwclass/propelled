import React from 'react';

export default class User extends React.Component {

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

User.propTypes = {
  name: React.PropTypes.string.isRequired,
  lat: React.PropTypes.string.isRequired,
  lng: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  defaultAnimation: React.PropTypes.string,
  zoom: React.PropTypes.string
};
