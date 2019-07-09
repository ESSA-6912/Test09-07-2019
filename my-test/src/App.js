import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import { Provider, connect } from "react-redux"
import logo from './logo.svg';
import Login from './specific/Auth/Login';
import store from './Store';
import Home from './specific/Home/Home';

function App({ auth }) {
  console.log(auth)
  return (
    <BrowserRouter>
      <Switch>
        {auth.loggedIn && <Redirect path="/login" to="/home" />}
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />

        <Redirect path="/" exact to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = ({ auth }) => ({
  auth
})

export default connect(mapStateToProps)(App);
