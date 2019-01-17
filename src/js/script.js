// Global app controller
import City from './models/City';

const state = {};

// WEATHER CONTROLLER IIFE
var weatherController = (function() {
    // 


})();

// UI CONTROLLER IIFE
var UIcontroller = (function() {
    // Some code

})();

// GLOBAL APP CONTROLLER IIFE
var controller = (function (weathCtrl, UICtrl) {
    // 1. Load the weather

    // 2. Add weather data to the weather controller

    // 3. display the weather data on the UI
    state.city = new City(524901);

    console.log(state.city);

    return {
        init: function() {
            console.log('Application has started.');
        }
    }

})(weatherController, UIcontroller);


controller.init();