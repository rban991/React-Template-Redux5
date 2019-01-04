import { combineReducers } from 'redux';
import authReducer from './authReducer'; 
import popupsReducer from './popupsReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


export default combineReducers({
 auth: authReducer,
 popups: popupsReducer,
 firestore: firestoreReducer,
 firebase: firebaseReducer
});