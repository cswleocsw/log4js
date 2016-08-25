(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Log4js"] = factory();
	else
		root["Log4js"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Logger = __webpack_require__(1);

	var _Logger2 = _interopRequireDefault(_Logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LogFactory = function () {
	  function LogFactory() {
	    _classCallCheck(this, LogFactory);
	  }

	  LogFactory.prototype.getLogger = function getLogger(name) {
	    var logger = new _Logger2.default(name);
	    return logger;
	  };

	  return LogFactory;
	}();

	exports.default = new LogFactory();
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LEVEL_MAP = exports.LEVEL_MAP = { DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, FATAL: 5 };
	var LEVEL_KEY = exports.LEVEL_KEY = { 1: 'DEBUG', 2: 'INFO', 3: 'WARN', 4: 'ERROR', 5: 'FATAL' };

	/**
	 *
	 * @param {string} str - string
	 * @returns {boolean} - bool
	 */
	function isString(str) {
	  return typeof str === 'string';
	}

	/**
	 *
	 * @param {string} str - string
	 * @param {number} len - length
	 * @returns {string} - string
	 */
	function padLeft(str, len) {
	  var s = '' + str;
	  return s.length >= len ? s : padLeft('0' + s, len);
	}

	/**
	 *
	 * @returns {string} - date time string
	 */
	function getDateTime() {
	  var d = new Date();
	  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + padLeft(d.getHours(), 2) + ':' + padLeft(d.getMinutes(), 2) + ':' + padLeft(d.getSeconds(), 2) + ':' + d.getMilliseconds();
	}

	var Logger = function () {
	  function Logger() {
	    var name = arguments.length <= 0 || arguments[0] === undefined ? 'LOG' : arguments[0];
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, Logger);

	    this.name = name;
	    this.level = LEVEL_MAP[options.level] || LEVEL_MAP.INFO;
	  }

	  Logger.prototype.setLevel = function setLevel(level) {
	    if (LEVEL_MAP[level]) {
	      this.level = LEVEL_MAP[level];
	    }
	  };

	  Logger.prototype.debug = function debug(str) {
	    if (isString(str)) {
	      for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        others[_key - 1] = arguments[_key];
	      }

	      this.write(LEVEL_MAP.DEBUG, str, others);
	    }
	  };

	  Logger.prototype.info = function info(str) {
	    if (isString(str)) {
	      for (var _len2 = arguments.length, others = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        others[_key2 - 1] = arguments[_key2];
	      }

	      this.write(LEVEL_MAP.INFO, str, others);
	    }
	  };

	  Logger.prototype.warn = function warn(str) {
	    if (isString(str)) {
	      for (var _len3 = arguments.length, others = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	        others[_key3 - 1] = arguments[_key3];
	      }

	      this.write(LEVEL_MAP.WARN, str, others);
	    }
	  };

	  Logger.prototype.error = function error(str) {
	    if (isString(str)) {
	      for (var _len4 = arguments.length, others = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	        others[_key4 - 1] = arguments[_key4];
	      }

	      this.write(LEVEL_MAP.ERROR, str, others);
	    }
	  };

	  Logger.prototype.fatal = function fatal(str) {
	    if (isString(str)) {
	      for (var _len5 = arguments.length, others = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	        others[_key5 - 1] = arguments[_key5];
	      }

	      this.write(LEVEL_MAP.FATAL, str, others);
	    }
	  };

	  Logger.prototype.write = function write(level, str, others) {
	    if (level >= this.level && isString(str)) {
	      var log = console[LEVEL_KEY[level].toLowerCase()] ? console[LEVEL_KEY[level].toLowerCase()] : console.log;
	      log.apply(undefined, ['[' + getDateTime() + '] [' + LEVEL_KEY[level] + '] ' + this.name + ' - ' + str].concat(others));
	    }
	  };

	  return Logger;
	}();

	exports.default = Logger;

/***/ }
/******/ ])
});
;