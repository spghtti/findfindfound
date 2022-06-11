import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAd9FCpaGT09YRHkPeVUOK3b5smcTEJq0g',
  authDomain: 'foundme-spghtti.firebaseapp.com',
  projectId: 'foundme-spghtti',
  storageBucket: 'foundme-spghtti.appspot.com',
  messagingSenderId: '1078688903383',
  appId: '1:1078688903383:web:afc59244f6d9a26d798092',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { firebaseApp, db };
