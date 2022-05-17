import React, { useState } from 'react';
import cyberpunkScene from '../images/Zurgetron.png';
import HiddenObjects from './HiddenObjects';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const PlayingArea = () => {
  const [target, setTarget] = useState();
  const [hasClicked, setHasClicked] = useState(true);

  const showSelectionBox = (e) => {
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
      showDropdownMenu(e.pageX, e.pageY)
    );
    setTarget(target);
    hasClicked ? setHasClicked(false) : setHasClicked(true);
  };

  const showDropdownMenu = (x, y) => {
    console.log(x, y);
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
      <HiddenObjects />
    );
  };
  const getLocations = () => {
    async function querySnapshot() {
      return await getDocs(collection(db, 'locations'));
    }
    let array = [];
    (async () => {
      const result = await querySnapshot();
      result.forEach((doc) => {
        array.push({ name: doc.id, location: doc.data().location });
      });
    })();
    return array;
  };
  const checkGuess = (value, x, y) => {
    const answers = getLocations();
  };
  const handleClick = (event) => {
    const coords = [Number(event.pageX), Number(event.pageY)];
    showSelectionBox(event);
    checkGuess();
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
