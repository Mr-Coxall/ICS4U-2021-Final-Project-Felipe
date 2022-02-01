/**
 * This is the weather app.
 *
 * @author Felipe Garcia Affonso
 * @since 2022-01-26
 * @version 1.0
 */

import './App.css';
// WeatherFrontEnd is were all the code for the front end is.
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
