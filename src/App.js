import './styles/App.css';
import firebaseApp from './firebase';
import React, { useState } from 'react';
import PlayingArea from './components/PlayingArea';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [hasChosenImg, setHasChosenImg] = useState(false);

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
