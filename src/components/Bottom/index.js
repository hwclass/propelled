// Libraries
import React from 'react';

// Components
import Footer from 'grommet/components/Footer';
import Logo from 'grommet/components/icons/base/3d';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

const Bottom = () => {
  return (
    <Footer justify="between">
      <Logo />
      <Paragraph margin="none">
        © propelled
      </Paragraph>
      <Menu direction="row"
        size="small"
        dropAlign={{ right: "right" }}
      >
        <Anchor href="#">
          MIT Licence
        </Anchor>
      </Menu>
    </Footer>
  );
};

export default Bottom;
