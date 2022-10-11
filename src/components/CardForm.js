import React, { useState } from "react";
import { saveCard } from "../service/cardService";

const CardForm = (props) => {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    saveCard({ term, definition }).then((card) => {
      clearForm();
      props.onSave && typeof props.onSave === "function" && props.onSave(card);
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
  };

  return (
    <div className="tile">
      <form onReset={clearForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="card-term">TERM</label>
          <textarea
            id="card-term"
            value={term}
            onChange={handleTermChange}
          ></textarea>
        </div>

        <div>
          <label htmlFor="card-definition">DEFINITION</label>
          <textarea
            id="card-definition"
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
