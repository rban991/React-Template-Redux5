import React, { Component } from 'react';
// import { connect } from 'react-redux';
import '../styles/App.scss';
// import { simpleAction } from '../actions/simpleAction'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './web/home';
import PageNotFound from './web/pageNotFound';
import Page1 from './web/page1';
import Page2 from './web/page2';
import Navigation from './web/navigation';
import SignIn from './web/auth/signIn';
import SignUp from './web/auth/signUp';
import Mobi_Home from './mobi/home';
import Media from 'react-media';

class App extends Component {
  render() {
    return (   
          <Media query={{ minWidth: 480 }}>
          {matches =>
            matches ?
      
          (
            // desktop version is rendered
            <BrowserRouter>
              <div>
                <Navigation />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Page1' component={Page1} />
                  <Route exact path='/Page2' component={Page2} />
                  <Route exact path='/Sign-In' component={SignIn} />
                  <Route exact path='/Sign-Up' component={SignUp} />
                  <Route component={PageNotFound} />
                </Switch>
              </div>
            </BrowserRouter>
          ) : (
              // mobile version is rendered 
              <BrowserRouter>
                <div>
                  <Switch>
                    <Route component={Mobi_Home} />
                  </Switch>
                </div>
              </BrowserRouter>
            )
        }
      </Media>
    );
  }
}

    export default App;