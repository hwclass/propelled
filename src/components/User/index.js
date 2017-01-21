import React from 'react';

const User = ({ name, position, location }) => {
  return (
    <div>
      <span>{name}, </span>
      <span>{position.lat}, </span>
      <span>{position.lng}, </span>
      <span>{location}</span>
    </div>
  );
};

User.propTypes = {
  name: React.PropTypes.string.isRequired,
  position: React.PropTypes.shape({
    lat: React.PropTypes.number.isRequired,
    lng: React.PropTypes.number.isRequired,
  }),
  location: React.PropTypes.string.isRequired,
  defaultAnimation: React.PropTypes.string,
  zoom: React.PropTypes.string
};

export default User;
