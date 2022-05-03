import React, { useState } from 'react';
import cyberpunkScene from '../images/Zurgetron.png';

const PlayingArea = () => {
  const [target, setTarget] = useState();

  const showSelectionBox = (e) => {
    const targetStyle = {
      outline: '4px solid white',
      position: 'absolute',
      width: '75px',
      height: '75px',
    };

    const newDiv = React.createElement(
      'div',
      {
        style: {
          ...targetStyle,
          top: `${e.pageY - 35}px`,
          left: `${e.pageX - 35}px`,
        },
      },
      showDropdownMenu(e.pageX, e.pageY)
    );
    setTarget(newDiv);
  };

  const showDropdownMenu = (x, y) => {
    const dropdownMenuStyle = {
      backgroundColor: 'white',
      position: 'absolute',
      width: '150px',
      height: '250px',
    };

    return React.createElement('div', {
      style: { ...dropdownMenuStyle, left: '90px', top: '90px' },
    });
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
