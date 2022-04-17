import logo from "./logo.svg";
import Editor from "./components/Editor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Lexical!</p>
        <Editor />
      </header>
    </div>
  );
}

export default App;
