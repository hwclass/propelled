// Libraries
import React from 'react';
import { observer, inject } from 'mobx-react';
import uuid from 'uuid';

// Components
import User from '../../components/User/';
import Table from 'grommet/components/Table';

@inject('userLocationListStore') @observer
export default class UserList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { userLocationListStore } = this.props;
    return (
      <div>
        <Table scrollable>
          <tbody>
            {
              userLocationListStore.locationList.map((user) => {
                return <User key={uuid.v1()} name={user.name} position={user.position} location={user.location}/>;
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }

}
