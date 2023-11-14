import React from "react";

function NewsUi({ elem, i }) {
  return (
    <div className="news-card">
      <div className="news-img">
        <img src={elem.img} alt="news_img" />
      </div>
      <div className="news-text">
        <div className="news-title">
          <h3>{elem.title}</h3>
        </div>
        <div className="news-description">
          <p>{elem.description}</p>
        </div>
        <div className="news-date">
          <span>{elem.date}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsUi;
