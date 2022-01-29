/**
 * This is the weather frond end.
 *
 * @author Felipe Garcia Affonso
 * @since 2022-01-27
 * @version 1.1
 */

import React from 'react';
import { Weather } from '../weather.js';
import aFewClounds from '../a_few_clouds.jpeg'

const myWeather = new Weather("bf4258670ef60d98bcc1bff161cbff76");

export class WeatherFrontEnd extends React.Component {
    state = {
        city: "",
        temp: 0,
        weather: "",
        feels_like: 0,
        humidity: 0,
        max_temp: 0,
        min_temp: 0,
        background_image: { uri: "/a_few_clouds.jpeg" }
    };

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({city: this.inputNode.value})

        myWeather.updateWeather(this.inputNode.value)

        setTimeout(() => {
            console.log(myWeather.isCity())
            if (myWeather.isCity()) {
                this.setState({temp: myWeather.getTemperature()})
                this.setState({weather: myWeather.getWeather()})
                this.setState({humidity: myWeather.getHumidity()})
                this.setState({feels_like: myWeather.getFeelsLike()})
                this.setState({max_temp: myWeather.getFeelsLike()})
                this.setState({min_temp: myWeather.getFeelsLike()})
            } else {
                this.setState({city: "Error, it is not a city."})
            }
        }, 2000);
    }

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
                        <th>MAX</th>
                        <th>MIN</th>
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
