import './styles/App.css';
import React, { useState, useEffect } from 'react';
import PlayingArea from './components/PlayingArea';
import Header from './components/Header';
import Footer from './components/Footer';
import Leaderboard from './components/Leaderboard';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [timer, setTimer] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  const handleButtonClick = () => {
    const body = document.body;
    setShowModal(false);
    startGame();
    body.style.overflowY = 'visible';
  };

  useEffect(() => {
    if (hasStarted) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [hasStarted]);

  const startGame = () => {
    setHasStarted(true);
  };

  const stopGame = () => {
    setHasStarted(false);
  };

  const renderStartModal = () => {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-headline">
            {' '}
            <h2>Can you find us?</h2>
          </div>
          <div className="modal-description">
            <span>
              Objective: find all three objects as fast as possible. You can
              submit your score and see how you stack up against other players!{' '}
            </span>
          </div>
          <div className="modal-items">
            <div className="modal-headline">
              <h3>The targets:</h3>
            </div>
            <div className="modal-items-object">
              <img
                alt="stand mixer icon"
                className="hidden-object-list-item-icon"
                src={require('./images/objects/mixer.png')}
              />
              <h3 className="hidden-object-list-item-name">Stand mixer</h3>
            </div>
            <div className="modal-items-object">
              <img
                alt="tropical bird icon"
                className="hidden-object-list-item-icon"
                src={require('./images/objects/bird.png')}
              />
              <h3 className="hidden-object-list-item-name">Tropical bird</h3>
            </div>
            <div className="modal-items-object">
              <img
                alt="golden egg icon"
                className="hidden-object-list-item-icon"
                src={require('./images/objects/egg.png')}
              />
              <h3 className="hidden-object-list-item-name">Golden egg</h3>
            </div>
          </div>
          <div className="modal-button-container">
            <button className="modal-button" onClick={handleButtonClick}>
              Start
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderWinModal = () => {
    const time = document.querySelector('.header-timer').textContent;
    document.body.style.overflowY = 'hidden';

    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-headline">
            {' '}
            <h2>You won!</h2>
          </div>
          <div className="win-modal-description">
            <h3>Your time is {time}</h3>
            <input
              type="text"
              placeholder="Your name"
              className="modal-input"
            ></input>
            <button className="win-modal-button">Submit</button>
          </div>
          <Leaderboard />
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <Header timer={timer} />
      {hasWon && renderWinModal()}
      {showModal && renderStartModal()}
      <PlayingArea
        showModal={showModal}
        timer={timer}
        hasWon={hasWon}
        setHasWon={setHasWon}
        stopGame={stopGame}
        hasStarted={hasStarted}
      />
      <Footer />
    </div>
  );
}

export default App;
