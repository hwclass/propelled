import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default class App extends React.Component {

  render() {
    // const { location, children } = this.props;
    const { children } = this.props;
    // const { pathname, query } = location;

    return (
      <div>
        <Header/>
		{children}
        <Footer />
      </div>
    );
  }

}
