import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import "./App.css";
import "./normalize.css";
import { getCards } from "./service/cardService";
import CardList from "./components/CardList";
import Practice from "./components/Practice";

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
          <Router>
            <CardList
              path="/"
              cards={cards}
              onAdd={handleAdd}
              onUpdate={handleUpdate}
              onRemove={handleRemove}
            />
            <Practice path="practice" />
          </Router>
        </main>
      </div>
    </div>
  );
};

export default App;
