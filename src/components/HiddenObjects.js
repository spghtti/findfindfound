import React from 'react';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
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
    // console.log(`${value} => ${intCoords}`);
    const docRef = doc(db, 'locations', `${value}`);
    const docSnap = await getDoc(docRef);
    // console.log(docSnap.data().location);
    console.log(checkAccuracy(intCoords, docSnap.data().location));
    return checkAccuracy(intCoords, docSnap.data().location);
  }

  const removeFromObjectList = (objectName) => {
    const arr = props.objectArray.map((object) => ({ ...object }));
    console.log(arr);

    for (let i = 0; i < props.objectArray.length; i++) {
      if (props.objectArray[i].value === objectName) {
        console.log(`Found: slicing ${objectName} at ${i}`);
        arr.splice(i, 1);
        console.log(arr);
        props.setObjectArray(arr);
      }
    }
    console.log(props.objectArray);
  };

  async function handleSelection(event) {
    // const menu = document.getElementById('dropdown-menu');
    // const target = document.getElementById('target');
    // menu.style.visibility = 'hidden';
    // target.style.visibility = 'hidden';

    const result = await checkGuess(
      event.target.attributes.value.value,
      props.coords
    );

    if (result) {
      removeFromObjectList(event.target.attributes.value.value);
      props.setHasFound(true);
      setTimeout(() => {
        props.setHasFound(false);
      }, 1500);
    } else {
      props.setHasMissed(true);
      setTimeout(() => {
        props.setHasMissed(false);
      }, 1500);
    }
  }

  const handleMenuClick = (event) => {
    handleSelection(event);
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
