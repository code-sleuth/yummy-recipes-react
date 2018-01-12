import React, { Component } from 'react';
import Navbar from './components/common/Navbar';
import Info from './components/common/Info';
import Routes from './components/common/routes';

class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="text-center">Yummy Recipes React App</h1>
        </div>
        <Navbar />
        <Routes />
        {this.props.children}
        <Info />
      </div>
    );
  }
}

export default App;
