/**
 * This program reads gets the weather with an api.
 *
 * @author Felipe Garcia Affonso
 * @since 2022-01-26
 * @version 1.1
 */

export class Weather {
    #jasonWeather = {}

    upddateWeather(city) {
        var response = {}
        // read all entities
        const fetchPromise = fetch("https://api.openweathermap.org/data/2.5/weather?q=Nepean&appid=bf4258670ef60d98bcc1bff161cbff76")

        this.#jasonWeather = fetchPromise.then((response) => {
            return response.json()
        }).then((weather) => {
            return weather;
        })
    }
}
