import React from 'react';
import questionmark from '../images/questionmark.png';

const Footer = () => {
  const showCredits = () => {
    const credits = document.querySelectorAll('.credits-content')[0];
    credits.classList.toggle('hidden');
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
            <li>
              <a href="https://www.reddit.com/user/zurgetron">
                Image by /u/Zurgetron
              </a>
            </li>
            <li>
              <a
                href="https://www.flaticon.com/free-icons/baking"
                title="baking icons"
              >
                Baking icon by Freepik
              </a>
            </li>
            <li>
              <a
                href="https://www.flaticon.com/free-icons/question-mark"
                title="question mark icons"
              >
                Question mark icon created by Freepik
              </a>
            </li>
          </ul>
        </div>
        <img
          src={questionmark}
          alt="question mark icon"
          className="credits-icon"
        />
      </div>
    </footer>
  );
};

export default Footer;
