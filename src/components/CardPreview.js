import React from "react";
import { useState } from "react";

const CardPreview = (props) => {
  const [isFront, setIsFront] = useState(true);

  const handleCardFlip = () => {
    setIsFront((currentStateValue) => !currentStateValue);
  };

  return (
    <div className={`tile ${isFront ? "" : "back"}`}>
      <h4 className="cardTerm">{isFront ? props.term : props.definition}</h4>
      <div className="cardButtons">
        <button type="button" className="tertiary" onClick={handleCardFlip}>
          {isFront ? "show back" : "show front"}
        </button>
        <div>
          <button type="button" className="secondary">
            edit
          </button>
          <button type="button" className="secondary danger">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
