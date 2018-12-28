import firebase from 'firebase/app';
// ^ /app imports the core functionality of Firebase
import 'firebase/firestore';
import 'firebase/auth';

  var config = {
    apiKey: "AIzaSyCZdLcGye5zhPhhGAPjuSvkiMuoYPFIRDs",
    authDomain: "fir-test-ab5ad.firebaseapp.com",
    databaseURL: "https://fir-test-ab5ad.firebaseio.com",
    projectId: "fir-test-ab5ad",
    storageBucket: "fir-test-ab5ad.appspot.com",
    messagingSenderId: "530971518124"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase; 