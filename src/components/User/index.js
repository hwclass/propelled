// Libraries
import React from 'react';

// Components
import TableRow from 'grommet/components/TableRow';

const User = ({ name, position, location }) => {
  return (
    <TableRow>
      <td>{name}</td>
      <td className="secondary">{position.lat}</td>
      <td className="secondary">{position.lat}</td>
      <td className="secondary">{location}</td>
    </TableRow>
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
