import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const style = {
    height: '1000px'
}

class Login extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login(e) {
    this.props.auth.login();
    e.preventDefault();
    this.goTo('home')
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="fixed-header mac desktop pace-done" style={style}>
        <div className="pace  pace-inactive"><div className="pace-progress" data-progress-text="100%" data-progress={99} style={{transform: 'translate3d(100%, 0px, 0px)'}}>
            <div className="pace-progress-inner" />
          </div>
          <div className="pace-activity" /></div>
        {/* START PAGE-CONTAINER */}
        <div className="lock-container full-height">
          {/* START PAGE CONTENT WRAPPER */}
          <div className="container-sm-height full-height sm-p-t-50">
            <div className="row row-sm-height">
              <div className="col-sm-6 col-sm-height col-middle">
                {/* START Lock Screen User Info */}
                <div className="inline">
                  <div className="thumbnail-wrapper circular d48 m-r-10 ">
                    <img width={43} height={43} data-src-retina="http://172.221.200.144/assets/img/profiles/avatar_small2x.jpg" data-src="http://172.221.200.144/assets/img/profiles/avatar.jpg" alt src="http://172.221.200.144/assets/img/profiles/avatar_small2x.jpg" />
                  </div>
                </div>
                <div className="inline">
                  <h5 className="logged hint-text no-margin">
                    Logged in as
                  </h5>
                  <h2 className="name no-margin">David Nester</h2>
                </div>
                {/* END Lock Screen User Info */}
              </div>
              <div className="col-sm-6 col-sm-height col-middle">
                {/* START Lock Screen Form */}
                <form id="form-lock" role="form" onSubmit={(e) => this.login(e)}>
                  <div className="row">
                    <div className="col-sm-12">
                      {/* START Form Control */}
                      <div className="form-group form-group-default sm-m-t-30">
                        <label>Credentials</label>
                        <div className="controls">
                          <input type="text" name="password" placeholder="Password to unlock" className="form-control" required aria-required="true" />
                        </div>
                      </div>
                      {/* END Form Control */}
                    </div>
                  </div>

                  {/* START Lock Screen Notification Icons*/}
                  <div className="row">
                    <div className="col-sm-12">
                      <a href="#" className="inline text-black fs-14 hint-text"><i className="pg-mail" /> <span className="hint-text">12</span></a>
                      <a href="#" className="inline text-black  fs-14 hint-text m-l-30"><i className="pg-comment" /> <span className="hint-text">4</span></a>
                    </div>
                  </div>
                  {/* END Lock Screen Notification Icons*/}
                </form>
                {/* END Lock Screen Form */}
              </div>
            </div>
          </div>
          {/* END PAGE CONTENT WRAPPER */}
        </div>
        {/* END PAGE-CONTAINER */}
        {/* START Lock Screen Footer Content*/}
        <div className="pull-bottom full-width">
          <div className="lock-container m-b-10 clearfix">
            <div className="inline pull-left">
              <img src="http://172.221.200.144/assets/img/demo/pages_icon_2x.png" alt className="m-t-5 " data-src="http://172.221.200.144/assets/img/demo/pages_icon.png" data-src-retina="http://172.221.200.144/assets/img/demo/pages_icon_2x.png" width={60} height={60} />
            </div>
            <div className="col-md-10 m-t-15">
              <p className="hinted-text small inline ">No part of this website or any of its contents may be reproduced, copied, modified or adapted, without the prior written consent of the author, unless otherwise indicated for stand-alone materials.</p>
            </div>
          </div>
        </div>
        {/* END Lock Screen Footer Content*/}
      </div>
    );
  }
}

export default Login;
