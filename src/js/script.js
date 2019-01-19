// Global app controller
import CityWeather from './models/CityWeather';
// import CurrentWeather from './models/CurrentWeather';

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
    state.city = new CityWeather(524901);
    await state.city.getWeather();

    // 2. Create current weather object

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
