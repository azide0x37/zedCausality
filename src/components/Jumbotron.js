import React, { PureComponent } from 'react';

class Jumbotron extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <div className="jumbotron">
        <h1>{title}</h1>
        <p>Please acknowledge that you will only use these powers for good.</p>
        <p><a className="btn btn-primary btn-lg">Confirm</a></p>
      </div>
    );
  }
}

export default Jumbotron;
