import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          u<span className="header-logo-accent-one">found</span>
          <span className="header-logo-accent-two">me</span>!
        </div>
        <div className="header-timer">00:00</div>
      </div>
    </header>
  );
};

export default Header;
