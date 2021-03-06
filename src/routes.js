import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication(nextState.location.hash);
  }
}

export const makeMainRoutes = () => {
  return (
      <BrowserRouter history={history} component={App}>
        <div>
          <Route exact path="/" render={(props) => <Login auth={auth} {...props} />} />
            <Route path="/home" render={(props) => <App auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }}/>
        </div>
      </BrowserRouter>
  );
}
