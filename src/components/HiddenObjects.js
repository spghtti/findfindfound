import React from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const HiddenObjects = (props) => {
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context('../images/objects', false, /\.(png|jpe?g|svg)$/)
  );

  const checkAccuracy = (guessArray, answerArray) => {
    const xDiff = Math.abs((answerArray[0] - guessArray[0]) / guessArray[0]);
    const yDiff = Math.abs((answerArray[1] - guessArray[1]) / guessArray[1]);
    if (xDiff < 0.103 && yDiff < 0.075) {
      return true;
    }
    return false;
  };

  async function checkGuess(value, coords) {
    const intCoords = [Number(coords[0]), Number(coords[1])];
    const docRef = doc(db, 'locations', `${value}`);
    const docSnap = await getDoc(docRef);
    return checkAccuracy(intCoords, docSnap.data().location);
  }

  const removeFromObjectList = (objectName) => {
    const arr = props.objectArray.map((object) => ({ ...object }));
    for (let i = 0; i < props.objectArray.length; i++) {
      if (props.objectArray[i].value === objectName) {
        arr.splice(i, 1);
        props.setObjectArray(arr);
      }
    }
  };

  // const getTime = (time) => {
  //   let arr = [...time];
  //   const hours = Number(arr.slice(0, arr.indexOf(':')));
  //   const minutes = Number(arr.slice(arr.indexOf(':') + 1).join(''));
  // };

  const checkForWin = () => {
    if (props.objectArray.length === 1 || props.objectArray.length === 0) {
      const time = document.querySelector('.header-timer');
      props.setHasWon(true);
      props.stopGame();
      // getTime(time.textContent);
      return true;
    }
    return false;
  };

  async function handleSelection(event) {
    const result = await checkGuess(
      event.target.attributes.value.value,
      props.coords
    );

    if (result) {
      removeFromObjectList(event.target.attributes.value.value);
      props.setHasFound(true);
      setTimeout(() => {
        props.setHasFound(false);
      }, 2000);
      checkForWin();
    } else {
      props.setHasMissed(true);
      setTimeout(() => {
        props.setHasMissed(false);
      }, 2000);
    }
  }

  const handleMenuClick = (event) => {
    const image = document.getElementById('find-image');
    handleSelection(event);
    image.click();
  };

  return (
    <div className="hidden-object-list">
      {props.objectArray.map((object, index) => (
        <div
          key={index}
          className="hidden-object-list-item"
          onClick={handleMenuClick}
          value={object.value}
          display="none"
        >
          <div className="hidden-object-list-item-icon-container">
            <img
              className="hidden-object-list-item-icon"
              src={images[`${object.image}.png`]}
              alt=""
              value={object.value}
            />
          </div>
          <div className="hidden-object-list-item-name" value={object.value}>
            {object.name}
          </div>
        </div>
      ))}{' '}
    </div>
  );
};

export default HiddenObjects;
