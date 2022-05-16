import './styles/App.css';
import firebaseApp from './firebase';
import React from 'react';
import PlayingArea from './components/PlayingArea';
import Header from './components/Header';
import Footer from './components/Footer';

// const firebase = require('firebase');
// require('firebase/firestore');

function App() {
  return (
    <div className="App">
      <Header />
      <PlayingArea />
      <Footer />
      {console.log(firebaseApp)}
    </div>
  );
}

export default App;
