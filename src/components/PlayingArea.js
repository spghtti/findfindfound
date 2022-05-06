import React, { useState } from 'react';
import cyberpunkScene from '../images/Zurgetron.png';
import HiddenObjects from './HiddenObjects';

const PlayingArea = () => {
  const [target, setTarget] = useState();

  const showSelectionBox = (e) => {
    const targetStyle = {
      outline: '4px solid white',
      position: 'absolute',
      width: '75px',
      height: '75px',
      borderRadius: '50%',
    };

    const target = React.createElement(
      'div',
      {
        style: {
          ...targetStyle,
          top: `${e.pageY - 35}px`,
          left: `${e.pageX - 35}px`,
        },
        className: 'noclick',
      },
      showDropdownMenu(e.pageX, e.pageY)
    );
    setTarget(target);
  };

  const showDropdownMenu = (x, y) => {
    const dropdownMenuStyle = {
      backgroundColor: 'rgb(36, 28, 28)',
      position: 'absolute',
      transform: 'translateX(45%) translateY(40%)',
      width: '9rem',
      height: 'auto',
    };

    return React.createElement(
      'div',
      {
        style: {
          ...dropdownMenuStyle,
          pointerEvents: 'auto',
        },
      },
      <HiddenObjects />
    );
  };

  const handleClick = (event) => {
    showSelectionBox(event);
  };

  return (
    <div className="find-image-container">
      {target}
      <img
        className="find-image"
        id="find-image"
        src={cyberpunkScene}
        alt="Isometric cyberpunk city illustration"
        onClick={handleClick}
      />
    </div>
  );
};

export default PlayingArea;
