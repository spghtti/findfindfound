import React from 'react';
import user from '../images/user.png';

const Footer = () => {
  const showCredits = () => {
    const credits = document.querySelectorAll('.credits-content')[0];
    const button = document.querySelectorAll('.credits-icon')[0];
    credits.classList.toggle('hidden');
    button.classList.toggle('grow');
  };

  return (
    <footer>
      <div
        className="credits-container"
        onMouseEnter={showCredits}
        onMouseLeave={showCredits}
      >
        <div className="credits-content hidden">
          <ul>
            <li>Image by /u/Zurgetron</li>
            <li>Mixer icon by Freepik</li>
            <li>Egg icon by Good Ware</li>
            <li>Question and bird icons by Freepik</li>
            <li>User icon by Bingge Liu</li>
          </ul>
        </div>
        <img src={user} alt="question mark icon" className="credits-icon" />
      </div>
    </footer>
  );
};

export default Footer;
