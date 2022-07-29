import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCTglGx1f0PYQqMClRmBiM1zUPHfFlZhOE",
  authDomain: "asayn-app.firebaseapp.com",
  projectId: "asayn-app",
  storageBucket: "asayn-app.appspot.com",
  messagingSenderId: "102733924899",
  appId: "1:102733924899:web:e2ee67509b3da23be4ff96",
  measurementId: "G-9KF3Y0TKJ4"
};

  const app = firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  export {auth};
 