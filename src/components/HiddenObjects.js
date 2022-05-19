import React from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
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

  const objectArray = [
    {
      name: 'Stand mixer',
      value: 'mixer',
      image: 'mixer',
      link: '../images/mixer',
      isFound: false,
    },
    {
      name: 'Tropical bird',
      value: 'bird',
      image: 'bird',
      link: '../images/bird',
      isFound: false,
    },
    {
      name: 'Golden egg',
      value: 'egg',
      image: 'egg',
      link: '../images/egg',
      isFound: false,
    },
  ];

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

  const checkGuess = (value, coords) => {
    const answers = getLocations();
    console.log(`${value} => ${coords}`);
    // for (let i = 0; i < answers.length; i++) {
    //   if (value.name === )
    // }
  };

  const handleSelection = (event) => {
    checkGuess(event.target.attributes.value.value, props.coords);
  };

  return (
    <div className="hidden-object-list">
      {objectArray.map((object, index) => (
        <div
          key={index}
          className="hidden-object-list-item"
          onClick={handleSelection}
          value={object.value}
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
      ))}
    </div>
  );
};

export default HiddenObjects;
