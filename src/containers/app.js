import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { simpleAction } from '../actions/simpleAction'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './web/home';
import PageNotFound from './web/pageNotFound';
import WorldMarkets from './web/worldMarkets';
import About from './web/about';
import Comparison from './web/comparison';
import Header from './web/header/header';
import Navigation from './web/header/navigation';
import SignIn from './web/auth/signIn';
import SignUp from './web/auth/signUp';
import Mobi_Home from './mobi/home';
import Media from 'react-media';
import '../styles/header.scss';

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
                <div className="HeaderBar">
                  <Header />
                    <Navigation />
                </div>

                <Switch>
                  <Route exact path='/Dashboard' component={Home} />
                  <Route exact path='/World-Markets' component={WorldMarkets} />
                  <Route exact path='/About' component={About} />
                  <Route exact path='/Compare-Stock-Brokers' component={Comparison} />
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