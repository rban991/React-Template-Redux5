import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createStore from './store';
import './styles/index.scss';
import App from './containers/app';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCZdLcGye5zhPhhGAPjuSvkiMuoYPFIRDs",
    authDomain: "fir-test-ab5ad.firebaseapp.com",
    databaseURL: "https://fir-test-ab5ad.firebaseio.com",
    projectId: "fir-test-ab5ad",
    storageBucket: "fir-test-ab5ad.appspot.com",
    messagingSenderId: "530971518124"
  };
firebase.initializeApp(config);

ReactDOM.render(
 <Provider store={createStore}>
  <App />
 </Provider>,
 document.getElementById('root')
);
