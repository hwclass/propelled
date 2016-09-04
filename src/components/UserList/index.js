import React from 'react';
import { observer, inject } from 'mobx-react';
import User from '../../components/User';
import uuid from 'uuid';

@inject('userListStore') @observer

export default class UserList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { userListStore } = this.props;
    return (
      <div>
        {
          userListStore.userList.map((user) => {
            return <User key={uuid.v1()} name={user.name} lat={user.lat} lng={user.lng} location={user.location}/>;
          })
        }
      </div>
    );
  }

}
