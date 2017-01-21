// Libraries
import React from 'react';

// Components
import Map from '../Map';
import UserList from '../UserList';
import UserForm from '../UserForm';
import Box from 'grommet/components/Box';

const Main = () => {
  return (
    <div>
    <Box direction="row"
      justify="start"
      align="center"
      wrap
      pad="small"
      margin="small"
      colorIndex="light-2"
    >
      <Box direction="row"
        justify="start"
        align="center"
        wrap
        pad="small"
        margin="small"
        colorIndex="light-2"
        basis="1/2"
      >
        <UserForm/>
      </Box>
      <Box direction="row"
        justify="start"
        align="center"
        wrap
        pad="small"
        margin="small"
        colorIndex="light-2"
      >
        <Map/>
      </Box>
    </Box>
    <UserList/>
    </div>
  );
};

export default Main;
