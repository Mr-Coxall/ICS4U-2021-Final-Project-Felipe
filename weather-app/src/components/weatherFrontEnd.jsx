/**
 * This is the weather frond end.
 *
 * @author Felipe Garcia Affonso
 * @since 2022-01-27
 * @version 1.1
 */

import React from 'react';
// Weather is were we get the information from.
import { Weather } from '../weather.js';
import aFewClounds from '../a_few_clouds.jpeg'

const myWeather = new Weather("bf4258670ef60d98bcc1bff161cbff76");

export class WeatherFrontEnd extends React.Component {
    // This class is the code for the for the app.

    // State is were the dinamic info is stored.
    state = {
        city: "",
        temp: 0,
        weather: "",
        feels_like: 0,
        humidity: 0,
        max_temp: 0,
        min_temp: 0,
        image: "https://openweathermap.org/img/wn/10d@2x.png"
    };

    handleSubmit = (event) => {
        // It runs this code when someone press the button.
        event.preventDefault()
        this.setState({city: this.inputNode.value})

        myWeather.updateWeather(this.inputNode.value)

        setTimeout(() => {
            // Timeout to wait for the api reponse.
            if (myWeather.isCity()) {
                this.setState({temp: myWeather.getTemperature()})
                this.setState({weather: myWeather.getWeather()})
                this.setState({humidity: myWeather.getHumidity()})
                this.setState({feels_like: myWeather.getFeelsLike()})
                this.setState({max_temp: myWeather.getMaxTemp()})
                this.setState({min_temp: myWeather.getMinTemp()})
                this.setState({image: "https://openweathermap.org/img/wn/" + myWeather.getIcon() + "@2x.png"})
            } else {
                this.setState({city: "Error, it is not a city."})
            }
        }, 2000);
    }

    // Render is where the xml code is.
  render() {
      return (
          <div>
            <form>
                <label>
                City:
                <input
                    type="text"
                    name="city"
                    required="required"
                    placehoder="Enter a city."
                    ref={node => (this.inputNode = node)}
                />
                </label>
                <button type="Submit" onClick={this.handleSubmit}>Submit</button>
            </form>
            <h1>{this.state.city}</h1>
              <img src={ this.state.image } alt="Wheather Icon." />
            <table>
                <thead>
                    <tr>
                        <th>Temperature</th>
                        <th>Weather</th>
                        <th>Humidity</th>
                        <th>Feels Like</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.temp}℃</td>
                        <td>{this.state.weather}</td>
                        <td>{this.state.humidity}%</td>
                        <td>{this.state.feels_like}℃</td>
                    </tr>
                </tbody>
            </table>
              <h1></h1>
            <table>
                <thead>
                    <tr>
                        <th>MAX Temp</th>
                        <th>MIN Temp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.max_temp}℃</td>
                        <td>{this.state.min_temp}℃</td>
                    </tr>
                </tbody>
            </table>
        </div>
              );
        }
}
