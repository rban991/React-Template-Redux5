import React, { Component } from 'react';
// import { connect } from 'react-redux';
import '../styles/App.scss';
// import { simpleAction } from '../actions/simpleAction'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './home';
import PageNotFound from './pageNotFound';
import Page1 from './page1';
import Page2 from './page2';
import Navigation from './navigation';
import SignIn from './auth/signIn';
import SignUp from './auth/signUp';

class App extends Component {
  render() {

    return (

      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path='/Home' component={Home} />
            <Route exact path='/Page1' component={Page1} />
            <Route exact path='/Page2' component={Page2} />
            <Route exact path='/Sign-In' component={SignIn} />
            <Route exact path='/Sign-Up' component={SignUp} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;