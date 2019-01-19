export default class CurrentWeather {
    constructor(cityName, dayWeather, description_txt, img_description, sunrise, sunset, chance_of_rain, humidity, wind_degree, wind_speed, feels_like, temp_max, temp_min, precipitation, pressure, visibility, uvIndex, air_quality_index, air_quality) {
        this.cityName = cityName;
        this.dayWeather = dayWeather;
        this.description_txt = description_txt;
        this.img_description = img_description;
        this.sunrise = sunrise;
        this.sunset = sunset;
        this.chance_of_rain = chance_of_rain;
        this.humidity = humidity;
        this.wind_dir = `${this.windDirectionToTxt(wind_degree)} ${wind_speed} mph`;
        this.feels_like = feels_like;
        this.temp_max = this.transferTempToF(temp_max);
        this.temp_min = this.transferTempToF(temp_min);
        this.precipitation = precipitation;
        this.pressure = `${pressure} inHg`;
        this.visibility = visibility;
        this.uvIndex = uvIndex;
        this.air_quality_index = air_quality_index;
        this.air_quality = air_quality;
    }

    transferTempToF(temp) {
        return Math.round(1.8 * (temp - 273) + 32);  
    }   

    windDirectionToTxt(windDegree) {
        if (windDegree > 348.75 && windDegree <= 360 && windDegree > 0 && windDegree <= 11.25) {
            return 'N';
        } else if (windDegree > 11.25 && windDegree <= 33.25) {
            return 'NNE';
        } else if (windDegree > 33.75 && windDegree <= 56.25) {
            return 'NE';
        } else if (windDegree > 56.25 && windDegree <= 78.75) {
            return 'ENE';
        } else if (windDegree > 78.75 && windDegree <= 101.25) {
            return 'E';
        } else if (windDegree > 101.25 && windDegree <= 123.75) {
            return 'ESE';
        } else if (windDegree > 123.75 && windDegree <= 146.25) {
            return 'SE';
        } else if (windDegree > 146.25 && windDegree <= 168.75) {
            return 'SSE';
        } else if (windDegree > 168.75 && windDegree <= 191.25) {
            return 'S';
        } else if (windDegree > 191.25 && windDegree <= 213.75) {
            return 'SSW';
        } else if (windDegree > 213.75 && windDegree <= 236.25) {
            return 'SW';
        } else if (windDegree > 236.25 && windDegree <= 258.75) {
            return 'WSW';
        } else if (windDegree > 258.75 && windDegree <= 281.25) {
            return 'W';
        } else if (windDegree > 281.25 && windDegree <= 303.75) {
            return 'WNW';
        } else if (windDegree > 303.75 && windDegree <= 326.25) {
            return 'NW';
        } else if (windDegree > 326.25 && windDegree <= 348.75) {
            return 'NNW';
        }
    }
}