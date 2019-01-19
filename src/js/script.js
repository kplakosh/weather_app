// Global app controller
import CityWeather from './models/CityWeather';
import CurrentWeather from './models/CurrentWeather';

/** Global state of the app
 * - Search object
 * - Current Weather
 * - Weather Time Block
 * - Weather for next 24 hours - day weather
 */
const state = {};

// WEATHER CONTROLLER IIFE
var weatherController = (async function() {
    // 1. Get weather data from server and save it to state
    state.city = new CityWeather(2172797);
    await state.city.getWeather();
    await state.city.getUVIndex();
    // await state.city.getAirQuality(); // Currently data is not available

    const currentWeatherList = state.city.weatherList[0];

    let cityName = state.city.name;
    let dayWeather = currentWeatherList.weather[0].main;
    let description_txt = currentWeatherList.weather[0].description;
    let img_description = currentWeatherList.weather[0].icon;
    let sunrise = '';
    let sunset = '';
    let chance_of_rain = currentWeatherList.rain;
    let humidity = currentWeatherList.main.humidity;
    let wind_degree = currentWeatherList.wind.deg;
    let wind_speed = currentWeatherList.wind.speed;
    let feels_like = currentWeatherList.main.temp;
    let temp_max = currentWeatherList.main.temp_max;
    let temp_min = currentWeatherList.main.temp_min;
    let precipitation = 'in';
    let pressure = currentWeatherList.main.pressure;
    let visibility = 'mi';
    let uvIndex = state.city.uvIndex;
    let air_quality_index = 'N/A';
    let air_quality = 'N/A';

    // 2. Create current weather object
    state.currentWeather = new CurrentWeather(cityName, dayWeather, description_txt, img_description, sunrise, sunset, chance_of_rain, humidity, wind_degree, wind_speed, feels_like, temp_max, temp_min, precipitation, pressure, visibility, uvIndex, air_quality_index, air_quality);

    // 3. Create weather time block

    // 4. Create 5 days weather forecast 

})();


// Current weather controller
var currentWeatherController = (function () {
    // 1. Get all needed parameters for current day

    // 2. Represent current day weather

})();

// 3 hour time-block for next 24 hours controller 
var timeBlockController = (function () {
    // 1. Get time-block data

    // 2. represent each time-block 
})();

var fiveDayWeatherForecastController = (function() {
    // 1. Get data for each day (date, img, tempMax, tempMin)

    // 2. Represent each day data

})();


// UI CONTROLLER IIFE
var UIcontroller = (function() {
    // 1. Add new city

    // 2. Represent weather for new city

})();

// GLOBAL APP CONTROLLER IIFE
const controller = (function (weathCtrl, UICtrl) {
    // 1. Get data from weather controller
    console.log(state);

    // 2. Get data from current weather controller

    // 3. Get data from time-block

    // 4. Get data from five day weather forecast controller

    // 5. Display the weather data on the UI

    
})(weatherController, currentWeatherController, timeBlockController, fiveDayWeatherForecastController, UIcontroller);
