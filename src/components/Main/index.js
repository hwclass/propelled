import React from 'react';
import { observer, inject } from 'mobx-react';
import Map from '../Map';
import UserList from '../UserList';

@inject('userList') @observer

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { userListStore } = this.props;
    return (
      <div>
        <Map markers={userListStore.userList}/>
        <UserList/>
      </div>
    );
  }

}
