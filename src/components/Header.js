import React from 'react';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          u<span className="header-logo-accent-one">found</span>
          <span className="header-logo-accent-two">me</span>!
        </div>
        <div className="header-timer">
          {Math.floor(props.timer / 60)}:
          {props.timer % 60 < 10 ? '0' + (props.timer % 60) : props.timer % 60}
        </div>
      </div>
    </header>
  );
};

export default Header;
