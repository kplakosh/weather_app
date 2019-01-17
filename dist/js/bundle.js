/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/config.js":
/*!**********************!*\
  !*** ./js/config.js ***!
  \**********************/
/*! exports provided: proxy, key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"proxy\", function() { return proxy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"key\", function() { return key; });\nconst proxy = 'https://cors-anywhere.herokuapp.com/';\nconst key = 'a2cbdd66c6fb90a2b9847ae10a3f22e7';\n\n//# sourceURL=webpack:///./js/config.js?");

/***/ }),

/***/ "./js/models/City.js":
/*!***************************!*\
  !*** ./js/models/City.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return City; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./js/config.js\");\n// import axios from 'axios';\n\n\nclass City {\n    constructor(id) {\n        id = this.id;\n    }\n\n    async getWeather() {\n        try {\n            const res = `${_config__WEBPACK_IMPORTED_MODULE_0__[\"proxy\"]}http://api.openweathermap.org/data/2.5/forecast?id=${this.id}&APPID=${_config__WEBPACK_IMPORTED_MODULE_0__[\"key\"]}`;\n        } catch (error) {\n            alert('Something went wrong');\n            console.log(error);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./js/models/City.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_City__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/City */ \"./js/models/City.js\");\n// Global app controller\n\n\nconst state = {};\n\n// WEATHER CONTROLLER IIFE\nvar weatherController = (function() {\n    // \n\n\n})();\n\n// UI CONTROLLER IIFE\nvar UIcontroller = (function() {\n    // Some code\n\n})();\n\n// GLOBAL APP CONTROLLER IIFE\nvar controller = (function (weathCtrl, UICtrl) {\n    // 1. Load the weather\n\n    // 2. Add weather data to the weather controller\n\n    // 3. display the weather data on the UI\n    state.city = new _models_City__WEBPACK_IMPORTED_MODULE_0__[\"default\"](524901);\n\n    console.log(state.city);\n\n    return {\n        init: function() {\n            console.log('Application has started.');\n        }\n    }\n\n})(weatherController, UIcontroller);\n\n\ncontroller.init();\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });