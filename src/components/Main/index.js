import React from 'react';
import Map from '../Map';
import UserList from '../UserList';
import UserForm from '../UserForm';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserForm/>
        <Map/>
        <UserList/>
      </div>
    );
  }

}
