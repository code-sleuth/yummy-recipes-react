import React, { Component } from 'react';
import Header from './components/common/Header';
import Routes from './components/common/routes';
import Footer from './components/common/Footer';
import Info from './components/common/Info';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
        <Footer />
        <Info />
      </div>
    );
  }
}

export default App;
