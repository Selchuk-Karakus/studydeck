import React from "react";
import CardForm from "./CardForm";
import CardPreview from "./CardPreview";

const CardList = ({ cards, onRemove, onUpdate, onAdd }) => {
  return (
    <>
      <h3>Your Cards</h3>
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
    </>
  );
};

export default CardList;
