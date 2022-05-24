import React, { useEffect } from 'react';

const NotificationBar = (props) => {
  const hasFound = props.hasFound;
  const hasMissed = props.hasMissed;

  const showNotification = () => {
    if (hasFound) {
      return <div className="notification-content">Found it!</div>;
    }
    if (hasMissed) {
      return <div className="notification-content">Try again</div>;
    }
  };

  return <div className="notification-bar">{showNotification()}</div>;
};

export default NotificationBar;
