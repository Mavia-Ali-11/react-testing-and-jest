import Greet from "./components/Greet"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Greet />
      <Greet name="Mustafa" />
    </div>
  );
}

export default App;
