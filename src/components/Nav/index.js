// Libraries
import React from 'react';

// Components
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Actions from 'grommet/components/icons/base/Actions';

const Nav = () => {
  return (
    <div>
      <Header fixed
        float={false}
        size="small"
        splash={false}
      >
        <Title>
          propelled
        </Title>
        <Box flex
          justify={ 'end' }
          direction={ 'row' }
          responsive={ false }
        >
          <Search inline
            fill
            size="medium"
            placeHolder="Search"
            dropAlign={{ right: "right" }}
          />
          <Menu icon={<Actions />}
            dropAlign={{ right: 'right' }}
          >
            <Anchor href="#"
              className={ 'active' }
            >
              First
            </Anchor>
            <Anchor href="#">
              Second
            </Anchor>
            <Anchor href="#">
              Third
            </Anchor>
          </Menu>
        </Box>
      </Header>
    </div>
  );
};

export default Nav;
