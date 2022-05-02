import React from 'react';
import cyberpunkScene from '../images/Zurgetron.png';

function PlayingArea() {
  return (
    <div className="find-image-container">
      <img
        className="find-image"
        src={cyberpunkScene}
        alt="Isometric cyberpunk city illustration"
      />
    </div>
  );
}

export default PlayingArea;
