import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './styles/index.scss';

import { Provider } from 'react-redux'
import store from './store';



store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
})
