import React from 'react';
import Header from '../../components/Header';
import UserList from '../../components/UserList';

export default class App extends React.Component {

  render() {
    const { location, children } = this.props;
    const { pathname, query } = location;

    return (
      <div>
        <Header genre={genre} pathname={pathname} />
          {children}
        <Userlist />
      </div>
    );
  }

}
