import axios from 'axios';
import { key, proxy } from '../config'

export default class CityWeather {
    constructor(id) {
        this.id = id;
    }

    async getWeather() {
        try {
            // Request to server by name of the city:
            // const res = await axios(`http://api.openweathermap.org/data/2.5/forecast?q=${this.name},${this.country_code}&mode=xml&APPID=${key}`)

            // Request to server by id
            const res = await axios(`${proxy}http://api.openweathermap.org/data/2.5/forecast?id=${this.id}&APPID=${key}`);
            this.name = res.data.city.name;  // City name

            this.description = res.data.list[0].weather[0].description;

            this.weatherList = res.data.list;  // Get list of weather for every 3 hours for next 5 days
            // console.log(this.weatherList);
        } catch (error) {
            alert('Something went wrong');
            console.log(error);
        }
    }
}
