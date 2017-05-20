import React from 'react';
/* eslint-disable */

const Button = ({ onClick, children }) =>
  <button className="btn btn-info" onClick={onClick} type="button">
    {children}
  </button>

const NavBar = ({ active, children }) => 
  <div>
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">EBAT</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
      <ul className="nav navbar-nav">
        <li className={active == "App" ? "active" : ""}><a href="./#ProjectView">Projects View<span className="sr-only">(current)</span></a></li>
        <li className={active == "ProjectBuilder" ? "active" : ""}><a href="./#ProjectBuilder">Create Project</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Tools<span className="caret"></span></a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li className="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul> 
        </li>
      </ul>
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Project Name"></input>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-warning">Search</button>
            </span>
          </div>
        </div>
      </form>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
      </ul>
    </div>
  </div>
  </nav>
  {children}
  </div>
    
const ProgressBar = ({ percentage }) => {
    const percent = percentage * 100
    var progressType = ""
    if (percent < 30) {
        progressType = "progress-bar progress-bar-danger"
    } else if (percent < 50) {
        progressType = "progress-bar progress-bar-warning"
    } else if (percent < 85) {
        progressType = "progress-bar"
    } else {
        progressType = "progress-bar progress-bar-success"
    }
    const progressStyle = { width: `${percent}%` }
    return(<div className="progress progress-striped">
            <div className={progressType} style={progressStyle} />
          </div>);}

const TitleBlock = ({ title }) => <h5>{title}</h5>

export {
	Button,
	NavBar,
	ProgressBar,
	TitleBlock,
}