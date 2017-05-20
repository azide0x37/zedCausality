import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Controller from './components/Controller'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  logout(e) {
    this.props.auth.logout();
    e.preventDefault();
    this.goTo('')
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="App">
        <Navbar
          logout={() => this.logout()} />
        <Jumbotron
          title={'Zed Chronology Controller'} />
        <Controller />
      </div>
    );
  }
}

export default App;
