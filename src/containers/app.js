import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.scss';
import { simpleAction } from '../actions/simpleAction'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './home'
import PageNotFound from './pageNotFound'

class App extends Component {
  render() {

    return (

      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/Home' component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;