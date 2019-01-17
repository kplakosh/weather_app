// import axios from 'axios';
import { key, proxy } from '../config'

export default class City {
    constructor(id) {
        id = this.id;
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
