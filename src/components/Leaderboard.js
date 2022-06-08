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
      highScores.push([score]);
    });
    console.log(`High scores: ${highScores}`);
    setScores([highScores]);
  }

  const getLeaderboard = () => {
    // fetchScores();
    console.log(scores);
    if (scores) {
      return <div>{scores}</div>;
    } else return <div>Loading</div>;
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
