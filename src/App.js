import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Controller from './components/Controller'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron
          title={'Zed Chronology Controller'} />
        <Controller />
      </div>
    );
  }
}

export default App;
