import React from 'react';
import { observer, inject } from 'mobx-react';
import Map from '../Map';

@inject('userListStore') @observer

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { userListStore } = this.props;
    return (
      <div>
        <Map markers={userListStore.userList}/>
      </div>
    );
  }

}
