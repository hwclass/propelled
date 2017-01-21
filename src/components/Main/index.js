import React from 'react';

// Components
import Map from '../Map';
import UserList from '../UserList';
import UserForm from '../UserForm';

const Main = () => {
  return (
    <div>
      <UserForm/>
      <Map/>
      <UserList/>
    </div>
  );
};

export default Main;
