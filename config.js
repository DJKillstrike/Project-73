import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  //Add configuration here
  apiKey: 'AIzaSyCiC3JXHG-d0l6LMi_wnFYhqz_ofk_1gAo',
  authDomain: 'project-73-424db.firebaseapp.com',
  projectId: 'project-73-424db',
  storageBucket: 'project-73-424db.appspot.com',
  messagingSenderId: '229073754605',
  appId: '1:229073754605:web:3876570c10c925266fafe4',
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
