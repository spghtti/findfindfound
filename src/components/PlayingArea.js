import React, { useState, useEffect } from 'react';
import cyberpunkScene from '../images/Zurgetron.png';
import HiddenObjects from './HiddenObjects';
import NotificationBar from './NotificationBar';

const PlayingArea = () => {
  const [target, setTarget] = useState();
  const [hasClicked, setHasClicked] = useState(true);
  const [hasFound, setHasFound] = useState(false);
  const [hasMissed, setHasMissed] = useState(false);
  const [objectArray, setObjectArray] = useState([
    {
      name: 'Stand mixer',
      value: 'mixer',
      image: 'mixer',
      link: '../images/mixer',
      notFound: true,
    },
    {
      name: 'Tropical bird',
      value: 'bird',
      image: 'bird',
      link: '../images/bird',
      notFound: true,
    },
    {
      name: 'Golden egg',
      value: 'egg',
      image: 'egg',
      link: '../images/egg',
      notFound: true,
    },
  ]);

  const showSelectionTarget = (e) => {
    // const viewHeight = e.target.scrollHeight;
    // const viewWidth = e.target.scrollWidth;

    //find absolute coordinates
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
          top: `${e.pageY - 35}px`,
          left: `${e.pageX - 29}px`,
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
      <HiddenObjects
        coords={[x, y]}
        hasClicked={hasClicked}
        setHasClicked={setHasClicked}
        hasFound={hasFound}
        setHasFound={setHasFound}
        setHasMissed={setHasMissed}
        hasMissed={hasMissed}
        objectArray={objectArray}
        setObjectArray={setObjectArray}
      />
    );
  };

  const handleClick = (event) => {
    console.log(objectArray);
    showSelectionTarget(event);
  };

  return (
    <div className="find-image-container">
      <NotificationBar
        hasFound={hasFound}
        setHasFound={setHasFound}
        setHasMissed={setHasMissed}
        hasMissed={hasMissed}
      />
      {target}
      <img
        className="find-image"
        id="find-image"
        src={cyberpunkScene}
        draggable={false}
        alt="Isometric cyberpunk city illustration"
        onClick={handleClick}
      />
    </div>
  );
};

export default PlayingArea;
