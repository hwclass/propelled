import React from 'react';
import { observer, inject } from 'mobx-react';
import Map from '../Map';
import UserList from '../UserList';

@inject('userLocationListStore') @observer

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { userLocationListStore } = this.props;
    return (
      <div>
        <Map markers={userLocationListStore.locationList}/>
        <UserList/>
      </div>
    );
  }

}
