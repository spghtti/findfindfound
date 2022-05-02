import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAd9FCpaGT09YRHkPeVUOK3b5smcTEJq0g',
  authDomain: 'foundme-spghtti.firebaseapp.com',
  projectId: 'foundme-spghtti',
  storageBucket: 'foundme-spghtti.appspot.com',
  messagingSenderId: '1078688903383',
  appId: '1:1078688903383:web:afc59244f6d9a26d798092',
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
