import React from "react";
import { Link } from "@reach/router";
import CardForm from "./CardForm";
import CardPreview from "./CardPreview";

const CardList = ({ cards, onRemove, onUpdate, onAdd }) => {
  return (
    <div>
      <h3>Your Cards</h3>
      <div className="practiceCTA">
        <Link to="practice">Practice Deck</Link>
      </div>
      <div className="gridContainer">
        <CardForm onSave={onAdd} />
        {cards.map((card) => (
          <CardPreview
            key={card.id}
            onRemove={onRemove}
            {...card}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
