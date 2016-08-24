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

	function padLeft(str, len) {
	  var s = '' + str;
	  return s.length >= len ? s : padLeft('0' + s, len);
	}

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
	    this.write(LEVEL_MAP.DEBUG, str);
	  };

	  Logger.prototype.info = function info(str) {
	    this.write(LEVEL_MAP.INFO, str);
	  };

	  Logger.prototype.warn = function warn(str) {
	    this.write(LEVEL_MAP.WARN, str);
	  };

	  Logger.prototype.error = function error(str) {
	    this.write(LEVEL_MAP.ERROR, str);
	  };

	  Logger.prototype.fatal = function fatal(str) {
	    this.write(LEVEL_MAP.FATAL, str);
	  };

	  Logger.prototype.write = function write(level, str) {
	    if (level >= this.level) {
	      var log = console[LEVEL_KEY[level].toLowerCase()] ? console[LEVEL_KEY[level].toLowerCase()] : console.log;
	      log('[' + getDateTime() + '] [' + LEVEL_KEY[level] + '] ' + this.name + ' - ' + str);
	    }
	  };

	  return Logger;
	}();

	exports.default = Logger;

/***/ }
/******/ ])
});
;