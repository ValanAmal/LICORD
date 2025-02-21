import React from "react";
import "./Rank.css";

const RankBoard = () => {
  const rankings = [
    { rank: 1, name: "VALAN AMAL RM", score: 1300 },
    { rank: 2, name: "TONY STARK", score: 1299 },
  ];

  return (
    <div className="rank-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile">
          <div className="avatar"></div>
          <h3>VALAN AMAL RM</h3>
          <p>YEAR III</p>
          <p>CSE</p>
          <div className="position">Position <span className="circle">1</span></div>
        </div>

        {/* Statistics */}
        <div className="statistics">
          <h4>Statistics</h4>
          <p>Overall ⭐ {1300}</p>
          <p>Culturals ⭐ {500}</p>
          <p>Events ⭐ {300}</p>
          <p>Sports ⭐ {500}</p>
        </div>
      </div>

      {/* Main Ranking Board */}
      <div className="ranking-board">
        <h1 className="title">STAR BOARD</h1>
        
        <div className="filter-buttons">
          <button>Overall</button>
          <button>Culturals</button>
          <button>Events</button>
          <button>Sports</button>
        </div>

        <div className="rank-list">
          {rankings.map((player, index) => (
            <div className="rank-item" key={index}>
              <div className="rank-number">{player.rank}</div>
              <div className="rank-name">▼ {player.name}</div>
              <div className="rank-score">{player.score}</div>
            </div>
          ))}
          {/* Placeholder empty rows */}
          {[...Array(5)].map((_, index) => (
            <div className="rank-item empty" key={index}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankBoard;
