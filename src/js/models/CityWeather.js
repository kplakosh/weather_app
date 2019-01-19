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

            const res = await axios(`${proxy}http://api.openweathermap.org/data/2.5/forecast?id=${this.id}&APPID=${key}`); // Request to server by id

            this.name = res.data.city.name;  // City name
            this.weatherList = res.data.list;  // Get list of weather for every 3 hours for next 5 days
            // this.currentDate = re.data.
            this.coordinates = res.data.city.coord;

            console.log(res);
            
        } catch (error) {
            alert('Something went wrong');
            console.log(error);
        }
    }

    async getUVIndex() {
        try {
            const res = await axios(`${proxy}http://api.openweathermap.org/data/2.5/uvi?appid=${key}&lat=${this.coordinates.lat}&lon=${this.coordinates.lon}`);
            this.currentDate = res.data.date_iso;
            this.uvIndex = res.data.value;

            // console.log(res);
        } catch (error) {
            alert('Can not get data for UV index');
            console.log(error);
        }
    }

    async getAirQuality() {
        try {
            const res = await axios(`${proxy}http://api.openweathermap.org/pollution/v1/co/${this.coordinates.lat},${this.coordinates.lon}/${this.currentDate}.json?appid=${key}`);

            console.log(res);
            // console.log(res);
        } catch (error) {
            alert('Can not Access Carbon Monoxide index');
            console.log(error);
        }
    }
}
