import React, { Component } from 'react';

class Navbar extends Component {
  logout(e) {
    this.props.logout();
    e.preventDefault();
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">zedCausality</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Link  A<span className="sr-only">(current)</span></a></li>
              <li><a href="#">Link G</a></li>
              <li><a href="#">Link D</a></li>
              <li><a href="#">Link Q</a></li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a onClick={(e) => this.logout(e)}>Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
