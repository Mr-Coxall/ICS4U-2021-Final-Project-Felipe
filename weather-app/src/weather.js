/**
 * This program reads gets the weather with an api.
 *
 * @author Felipe Garcia Affonso
 * @since 2022-01-26
 * @version 1.1
 */

export class Weather {
    // This class interacts with the weather api.
    _jsonWeather = {};
    _key = "";

    constructor(apiKey) {
        // Sets the api key.
        this._key = apiKey
    }

    updateWeather(city) {
        // This method gets the json file from the api.
        var response = {};
        const link = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this._key;

        const fetchPromise = fetch(link);

        fetchPromise.then((response) => {
            return response.json();
        }).then((weather) => {
            this._jsonWeather = weather;
        })
    }

    getWeather() {
        return this._jsonWeather.weather[0].description;
    }

    getTemperature() {
        return Math.round((this._jsonWeather.main.temp - 273.15) * 10)/ 10;
    }

    getFeelsLike() {
        return Math.round((this._jsonWeather.main.feels_like - 273.15) * 10)/ 10;
    }

    getHumidity() {
        return this._jsonWeather.main.humidity;
    }
}
