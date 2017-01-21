// Libraries
import React from 'react';

// Components
import Nav from '../Nav';
import Bottom from '../Bottom';

export default class App extends React.Component {

  render() {
    const { children } = this.props;
    // const { pathname, query } = location;

    return (
      <div>
        <Nav/>
          {children}
        <Bottom />
      </div>
    );
  }

}
