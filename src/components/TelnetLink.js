const telnet = require('telnet-client');
const connection = new telnet();

import React, { Component } from 'react';

class TelnetLink extends Component {
  constructor() {
      super();
      this.state = {
        currentDay: 78,
        params: {
          host: '127.0.0.1',
          port: 8081,
          shellPrompt: '/ # ',
          timeout: 100,
        }
  }

  componentDidMount() {
    connection.connect(this.state.params)
  }

  setCommand = ( command ) => {
    setTimeout(connection.exec('settime day', function(err, response) {
      console.log(response);
    }), 3000)
  }

  function resetDay () {
    connection.exec('settime day', function(err, response) {
      console.log(response);
    });
  }

  function nextDay () {
    connection.exec('help', function(err, response) {
    console.log(response);
  });}

  function surprise(cb) {
      (function loop() {
          var now = new Date();
          if (now.getMinutes() === 59) {
            if (now.getHours() === 0)
              cb();
          }
          now = new Date();                  // allow for time passing
          var delay = 60000 - (now % 60000); // exact ms to next minute interval
          setTimeout(loop, delay);
      })();
  }
  render() {
    const { title } = this.props;
    return ();
  }
}

export default TelnetLink;
