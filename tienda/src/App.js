import logo from './logo.svg';
import './App.css';
import Kucci from './Kucci.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Kucci} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
