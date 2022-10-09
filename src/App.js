import React, { useState, useEffect } from "react";
import "./App.css";
import "./normalize.css";
import CardPreview from "./components/CardPreview";
import getCards from "./service/cardService";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then(setCards);
  }, []);

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
            {cards.map(({ id, term, definition }) => (
              <CardPreview key={id} term={term} definition={definition} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
