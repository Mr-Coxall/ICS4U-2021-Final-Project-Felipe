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
        });
    }

    isCity() {
        // It checks to if the input was an actuall city.
        if (this._jsonWeather.cod === 200) {
            return true;
        } else {
            return false;
        }
    }

    getWeather() {
        // Returns the weather.
        return this._jsonWeather.weather[0].description;
    }

    getTemperature() {
        // Returns the temperature.
        return Math.round((this._jsonWeather.main.temp - 273.15) * 10)/ 10;
    }

    getFeelsLike() {
        // Returns the feels like.
        return Math.round((this._jsonWeather.main.feels_like - 273.15) * 10)/ 10;
    }

    getHumidity() {
        // Returns the Humidity.
        return this._jsonWeather.main.humidity;
    }

    getMaxTemp() {
        // Returns the max temp.
        return Math.round((this._jsonWeather.main.temp_max - 273.15) * 10)/ 10;
    }

    getMinTemp() {
        // Returns the min temp.
        return Math.round((this._jsonWeather.main.temp_min - 273.15) * 10)/ 10;
    }

    getIcon() {
        // Returns the icon id.
        return this._jsonWeather.weather[0].icon;
    }
}
