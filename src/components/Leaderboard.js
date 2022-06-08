import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Leaderboard = () => {
  const [scores, setScores] = useState();

  useEffect(() => {
    fetchScores();
  }, []);

  async function fetchScores() {
    const docRef = doc(db, 'scores', 'highscores');
    const docSnap = await getDoc(docRef);
    let highScores = [];
    Object.entries(docSnap.data()).forEach((score) => {
      highScores.push(score);
    });
    highScores = highScores.sort(function (a, b) {
      return a[1] - b[1];
    });
    highScores.splice(5);
    setScores(highScores);
  }

  const convertTime = (seconds) => {
    if (seconds > 59) {
      const hours = Math.floor(seconds / 60);
      let minutes = seconds % 60;
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      return `${hours}:${minutes}`;
    } else return `:${seconds}`;
  };

  const getLeaderboard = () => {
    if (scores) {
      return (
        <div>
          {scores.map((item, index) => (
            <div className="leaderboard-entry" key={index}>
              <div className="leaderboard-entry-name">{item[0]}</div>
              <div className="leaderboard-entry-score">
                {convertTime(item[1])}
              </div>
            </div>
          ))}
        </div>
      );
    } else return <div>Loading...</div>;
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h3>Leaderboard:</h3>
      </div>
      <div className="leaderboard-content">{getLeaderboard()}</div>
    </div>
  );
};

export default Leaderboard;
