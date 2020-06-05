import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBzGc7us8I0XjmxT-j0JOYtm-f5qtIXM3U',
  authDomain: 'reactzzaria-25738.firebaseapp.com',
  databaseURL: 'https://reactzzaria-25738.firebaseio.com',
  projectId: 'reactzzaria-25738',
  storageBucket: 'reactzzaria-25738.appspot.com',
  messagingSenderId: '398846638007',
  appId: '1:398846638007:web:e0acec29ab78cbcb471a32',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;
