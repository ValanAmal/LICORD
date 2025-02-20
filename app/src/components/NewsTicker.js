import React from "react";
import "./NewsTicker.css"; // Import CSS for styling

const NewsTicker = () => {
  const newsItems = [
    "🚀 Breaking: New tech innovation announced!",
    "📈 Stock Market Update: S&P 500 hits new high.",
    "⚽ Sports: Local team wins championship!",
    "🎭 Entertainment: Upcoming movies to watch this summer.",
    "🌍 World News: Climate change summit begins today."
  ];

  return (
    <div className="news-ticker">
      <div className="ticker-content">
        {newsItems.map((item, index) => (
          <span key={index} className="ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
