import React, { useState } from "react";
import { saveCard } from "../service/cardService";

const CardForm = ({ onSave, onCancel, card }) => {
  const id = card && card.id ? card.id : undefined;
  const [term, setTerm] = useState(id ? card.term : "");
  const [definition, setDefinition] = useState(id ? card.definition : "");

  const handleSubmit = (event) => {
    event.preventDefault();
    saveCard({ term, definition, id }).then((card) => {
      clearForm();
      onSave && typeof onSave === "function" && onSave(card);
    });
  };

  const handleTermChange = (event) => {
    const { value } = event.target;
    setTerm(value);
  };

  const handleDefinitionChange = (event) => {
    const { value } = event.target;
    setDefinition(value);
  };

  const clearForm = () => {
    setTerm("");
    setDefinition("");
    onCancel && typeof onCancel === "function" && onCancel();
  };

  return (
    <div className="tile">
      <h4>{id ? "Update Card" : "Add Card"}</h4>
      <form onReset={clearForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor={`card-term ${id ? id : "new"}`}>TERM</label>
          <textarea
            id={`card-term ${id ? id : "new"}`}
            value={term}
            onChange={handleTermChange}
          ></textarea>
        </div>

        <div>
          <label htmlFor={`card-definition ${id ? id : "new"}`}>
            DEFINITION
          </label>
          <textarea
            id={`card-definition ${id ? id : "new"}`}
            value={definition}
            onChange={handleDefinitionChange}
          ></textarea>
        </div>

        <div className="buttons">
          <button className="primary" type="submit">
            save
          </button>
          <button className="secondary" type="reset">
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
