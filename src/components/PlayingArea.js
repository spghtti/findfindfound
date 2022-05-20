import React, { useState } from 'react';
import cyberpunkScene from '../images/Zurgetron.png';
import HiddenObjects from './HiddenObjects';

const PlayingArea = () => {
  const [target, setTarget] = useState();
  const [hasClicked, setHasClicked] = useState(true);
  // const [menuCoords, setMenuCoords] = useState();

  const showSelectionTarget = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    const offsetWidth = e.target.offsetWidth;
    const offsetHeight = e.target.offsetHeight;
    const relX = x / offsetWidth;
    const relY = (y - 50) / offsetHeight;

    const targetStyle = {
      outline: '4px solid white',
      position: 'absolute',
      width: '75px',
      height: '75px',
      borderRadius: '50%',
      visibility: `${hasClicked ? 'visible' : 'hidden'}`,
    };

    const target = React.createElement(
      'div',
      {
        style: {
          ...targetStyle,
          top: `${e.pageY - 50}px`,
          left: `${e.pageX - 40}px`,
        },
        id: 'target',
        className: 'noclick',
      },
      showDropdownMenu(relX, relY)
    );
    setTarget(target);
    hasClicked ? setHasClicked(false) : setHasClicked(true);
  };

  const showDropdownMenu = (x, y) => {
    const dropdownMenuStyle = {
      position: 'absolute',
      transform: 'translateX(45%) translateY(40%)',
      width: '9rem',
      height: 'auto',
      visibility: `${hasClicked ? 'visible' : 'hidden'}`,
    };

    return React.createElement(
      'div',
      {
        style: {
          ...dropdownMenuStyle,
          pointerEvents: 'auto',
        },
        id: 'dropdown-menu',
      },
      <HiddenObjects coords={[x, y]} />
    );
  };

  const handleClick = (event) => {
    showSelectionTarget(event);
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
