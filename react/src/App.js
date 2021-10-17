import React, { Component } from 'react';
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SinglePost from './components/singlePost/SinglePost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Welcome from "./components2/auth/Welcome";
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import './App.css';

Amplify.configure(awsconfig);


class App extends Component  {
  
  state = {
    isAuthenticated: false,
    user: null
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated})
  }

  setUser = user => {
    this.setState({ user: user});
  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }
  return (
    <Router>
      <Topbar auth={authProps}/>
      <Switch>
        {/* <Route path="/register"> {user ? <Home/> : <Register />} </Route>
        <Route path="/login"> {user? <Home/> : <Login />} </Route>
        <Route path="/write"> {user? <Write /> : <Register/> } </Route>
        <Route path="/setting"> {user? <Setting /> : <Register />} </Route>
        */}

        <Route exact path="/" render={(props) => <Home {...props} auth={authProps} />} />
        <Route exact path="/login" render={(props) => <Login {...props} auth={authProps} />} />
        <Route exact path="/register" render={(props) => <Register {...props} auth={authProps} />} />
        <Route exact path="/welcome" render={(props) => <Welcome {...props} auth={authProps} />}/>
        <Route exact path="/post/:postId" render={(props) => <SinglePost {...props} auth={authProps} />} /> 
        <Route exact path="/write" render={(props) => <Write {...props} auth={authProps} />}/> 
      </Switch>
    </Router>
  );
}
}

export default App;
