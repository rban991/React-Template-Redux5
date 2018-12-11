import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.scss';
import { simpleAction } from '../actions/simpleAction';

class exampleContainer extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Proof it is all working <pre>
            {
              JSON.stringify(this.props)
            }
          </pre> 
       </p>
        <button onClick={this.simpleAction}>Test redux action</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

