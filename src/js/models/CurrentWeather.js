// import { key, proxy } from '../config';
import DayWeather from 'DayWeather';

export default class CurrentWeather {
    constructor(dayWeather, description_txt, sunrise, sunset, chance_of_rain, humidity, wind, feels_like, precipitation, pressure, visibility, uv_index, air_quality_index, air_quality) {
        this.dayWeather = dayWeather;
        this.description_txt = description_txt;
        this.img_description = img_description;
        this.sunrise = sunrise;
        this.sunset = sunset;
        this.chance_of_rain = chance_of_rain;
        this.humidity = humidity;
        this.wind = wind;
        this.feels_like = feels_like;
        this.temp_max = temp_max;
        this.precipitation = precipitation;
        this.pressure = pressure;
        this.visibility = visibility;
        this.uv_index = uv_index;
        this.air_quality_index = air_quality_index;
        this.air_quality = air_quality;
    }
}