import logo from './logo.svg';
import './App.css';
import { Weather } from './weather.js';

const myWeather = new Weather;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            Hello, World!
        </p>
      </header>
    </div>
  );
}

export default App;
