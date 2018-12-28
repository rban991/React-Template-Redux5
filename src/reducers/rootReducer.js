import { combineReducers } from 'redux';
// import simpleReducer from './simpleReducer.js';
import booksReducer from './booksReducer';
import authReducer from './authReducer'; 
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


export default combineReducers({
 auth: authReducer,
 books: booksReducer,
 firestore: firestoreReducer,
 firebase: firebaseReducer
});