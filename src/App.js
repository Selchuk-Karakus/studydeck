import React, { useState, useEffect } from "react";
import "./App.css";
import "./normalize.css";
import CardPreview from "./components/CardPreview";
import { getCards } from "./service/cardService";
import CardForm from "./components/CardForm";

const App = () => {
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

  const handleUpdate = (card) => {
    setCards((existingCards) =>
      existingCards.map((existingCard) => {
        return existingCard.id === card.id ? card : existingCard;
      })
    );
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
            {cards.map((card) => (
              <CardPreview
                key={card.id}
                onRemove={handleRemove}
                {...card}
                onUpdate={handleUpdate}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
