import React, { useState } from "react";

const Practice = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFront, setIsFront] = useState(true);
  const { term = "", definition = "" } =
    cards && cards.length && cards[currentIndex];

  const handleCardFlip = () => {
    setIsFront((currentState) => !currentState);
  };

  const handleNextCard = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % cards.length);
  };

  const handlePreviousCard = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <div className="practiceContainer">
      <h3>Practice</h3>
      <div className="progress">
        {currentIndex + 1}/{cards.length}
      </div>
      <div className="card">
        <div className="practiceTerm">{isFront ? term : definition}</div>
        <div className="practiceButtons">
          <button type="button" className="tertiary" onClick={handleCardFlip}>
            {isFront ? "show back" : "show front"}
          </button>
          <div>
            <button
              type="button"
              className="secondary"
              onClick={handlePreviousCard}
            >
              previous
            </button>
            <button type="button" className="primary" onClick={handleNextCard}>
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
