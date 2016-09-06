import React from 'react';
import Map from '../Map';
import UserList from '../UserList';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Map/>
        <UserList/>
      </div>
    );
  }

}
