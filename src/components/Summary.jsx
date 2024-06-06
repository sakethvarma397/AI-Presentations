/* eslint-disable react/jsx-key */
import React from "react";

function Summary({ summary }) {
  const { title, slides } = summary;
  return (
    <div className="summary-container">
      <h2>{title}</h2>
      {slides.map((slide) => (
        <div key={slide.title}>
          <h3>{slide.title}</h3>
          <ul>
            {slide.content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Summary;
