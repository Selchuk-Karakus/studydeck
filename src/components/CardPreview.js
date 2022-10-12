import React, { useState } from "react";
import { destroyCard } from "../service/cardService";
import CardForm from "./CardForm";

const CardPreview = ({ onRemove, onUpdate, ...card }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleToggleEdit = () => {
    setIsEditMode((currentModeVal) => !currentModeVal);
  };

  return isEditMode ? (
    <CardForm onCancel={handleToggleEdit} card={card} onSave={onUpdate} />
  ) : (
    <View {...card} onRemove={onRemove} onEdit={handleToggleEdit} />
  );
};

const View = ({ id, term, definition, onRemove, onEdit }) => {
  const [isFront, setIsFront] = useState(true);

  const handleCardFlip = () => {
    setIsFront((currentStateValue) => !currentStateValue);
  };

  const handleDelete = () => {
    const confirm = window.confirm(
      `Are you sure you wish to delete "${term}"?`
    );
    if (confirm) {
      destroyCard(id).then(() => {
        onRemove && typeof onRemove === "function" && onRemove(id);
      });
    }
  };

  return (
    <div className={`tile ${isFront ? "" : "back"}`}>
      <h4 className="cardTerm">{isFront ? term : definition}</h4>
      <div className="cardButtons">
        <button type="button" className="tertiary" onClick={handleCardFlip}>
          {isFront ? "show back" : "show front"}
        </button>
        <div>
          <button type="button" className="secondary" onClick={onEdit}>
            edit
          </button>
          <button
            type="button"
            className="secondary danger"
            onClick={handleDelete}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
