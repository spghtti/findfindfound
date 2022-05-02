import './styles/App.css';
import firebaseApp from './firebase';
import React, { useState } from 'react';
import PlayingArea from './components/PlayingArea';
import Header from './components/Header';

function App() {
  const [hasChosenImg, setHasChosenImg] = useState(false);

  return (
    <div className="App">
      <Header />
      <PlayingArea />
      {console.log(firebaseApp)}
    </div>
  );
}

export default App;
