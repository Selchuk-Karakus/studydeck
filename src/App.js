import "./App.css";
import "./normalize.css";
import CardPreview from "./components/CardPreview";

function App() {
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
            <CardPreview definition = "quack" term="What does a duck say?" />
            <CardPreview definition = "whoof" term="What does a dog say?" />
            <CardPreview definition = "moooo" term="What does a cow say?" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
