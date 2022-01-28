import logo from './logo.svg';
import './App.css';
import { WeatherFrontEnd } from './components/weatherFrontEnd.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h3>Weather App</h3>
      </header>
      <body>
        <WeatherFrontEnd />
      </body>
    </div>
  );
}

export default App;
