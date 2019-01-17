// import axios from 'axios';
import { key, proxy } from '../config'

export default class City {
    constructor(name, id, current_weather, day_forecast, five_day_forecast) {
        this.name = name;
        this.id = id;
        this.current_weather = current_weather;
        this.day_forecast = day_forecast;
        this.five_day_forecast = five_day_forecast;
    }

    async getWeather() {
        try {
            const res = `${proxy}http://api.openweathermap.org/data/2.5/forecast?id=${this.id}&APPID=${key}`;
        } catch (error) {
            alert('Something went wrong');
            console.log(error);
        }
    }
}
