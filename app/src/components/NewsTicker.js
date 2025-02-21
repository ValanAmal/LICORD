import React from "react";
import "./NewsTicker.css"; 

const NewsTicker = () => {
  const newsItems = [
    { image: "/logo.png", alt: "Tech Innovation" },
    { image: "/Licetbg.png", alt: "Stock Market" },
    { image: "/land1.jpg", alt: "Sports Championship" },
    { image: "/land3.jpg", alt: "Upcoming Movies" },
    { image: "/land2.jpg", alt: "Climate Summit" }
  ];

  return (
    <div className="news-ticker">
      <div className="ticker-content">
      {newsItems.concat(newsItems).map((item, index) => ( // Duplicate for smooth looping
          <div key={index} className="ticker-item">
            <img src={item.image} alt={item.alt} className="news-poster" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
