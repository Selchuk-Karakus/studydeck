import React, { useState, useEffect } from "react";
import "./App.css";
import "./normalize.css";
import CardPreview from "./components/CardPreview";
import { getCards } from "./service/cardService";
import CardForm from "./components/CardForm";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then(setCards);
  }, []);

  const handleRemove = (id) => {
    setCards((existingCards) => existingCards.filter((card) => card.id !== id));
  };

  const handleAdd = (card) => {
    setCards((existingCards) => [...existingCards, card]);
  };

  return (
    <div>
      <div>
        <header>
          <h1>
            Study<span className="titleHighlight">Deck</span>
          </h1>
          <h2>Retention through repitition</h2>
        </header>
        <main>
          <h3>Your Cards</h3>
          <div className="gridContainer">
            <CardForm onSave={handleAdd} />
            {cards.map(({ id, term, definition }) => (
              <CardPreview
                key={id}
                term={term}
                definition={definition}
                id={id}
                onRemove={handleRemove}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
