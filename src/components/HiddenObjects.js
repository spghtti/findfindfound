import React from 'react';

const HiddenObjects = () => {
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
      image: 'mixer',
      link: '../images/mixer',
      isFound: false,
    },
    {
      name: 'Tropical bird',
      image: 'bird',
      link: '../images/bird',
      isFound: false,
    },
    { name: 'Golden egg', image: 'egg', link: '../images/egg', isFound: false },
  ];

  return (
    <div className="hidden-object-list">
      {objectArray.map((object, index) => (
        <div key={index} className="hidden-object-list-item">
          <div className="hidden-object-list-item-icon-container">
            <img
              className="hidden-object-list-item-icon"
              src={images[`${object.image}.png`]}
              alt=""
            />
          </div>
          <div className="hidden-object-list-item-name">{object.name}</div>
        </div>
      ))}
    </div>
  );
};

export default HiddenObjects;
