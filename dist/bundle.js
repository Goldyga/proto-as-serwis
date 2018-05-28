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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/slider-pro/dist/css/slider-pro.css":
/*!*********************************************************!*\
  !*** ./node_modules/slider-pro/dist/css/slider-pro.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Unknown word (2:9)\n\n  1 | \n> 2 |         var result = require(\"!!../../../style-loader/index.js!../../../css-loader/index.js!./slider-pro.css\");\n    |         ^\n  3 | \n  4 |         if (typeof result === \"string\") {\n  5 |             module.exports = result;\n");

/***/ }),

/***/ "./src/js/materialize.js":
/*!*******************************!*\
  !*** ./src/js/materialize.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import '.././materialize-src/js/bin/materialize.js';

$(document).ready(function () {
    // $('.sidenav').sidenav();
    // $('.carousel').carousel({
    //     indicators: true,
    //     padding: 150,
    //     fullWidth: true
    // });
    // $('.modal').modal({

    // });
});

/***/ }),

/***/ "./src/js/serwis.js":
/*!**************************!*\
  !*** ./src/js/serwis.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// import 'slider-pro';
// import styles from 'slider-pro/dist/css/slider-pro.css';
// import styles from 'slider-pro/dist/css/slider-pro.css';
const content = __webpack_require__(/*! slider-pro/dist/css/slider-pro.css */ "./node_modules/slider-pro/dist/css/slider-pro.css").toString();

$(document).ready(function () {
    $('body').append('<style>' + css.toString() + '</style>');
    $('#my-slider').sliderPro();
});

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./src/js/materialize.js ./src/js/serwis.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/materialize.js */"./src/js/materialize.js");
module.exports = __webpack_require__(/*! ./src/js/serwis.js */"./src/js/serwis.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map