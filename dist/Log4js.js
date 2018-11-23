(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Log4js"] = factory();
	else
		root["Log4js"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Logger.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/debug/dist/debug.js":
/*!******************************************!*\
  !*** ./node_modules/debug/dist/debug.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n(function (f) {\n  if (( false ? undefined : _typeof(exports)) === \"object\" && typeof module !== \"undefined\") {\n    module.exports = f();\n  } else if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var g; }\n})(function () {\n  var define, module, exports;\n  return function () {\n    function r(e, n, t) {\n      function o(i, f) {\n        if (!n[i]) {\n          if (!e[i]) {\n            var c = \"function\" == typeof require && require;\n            if (!f && c) return require(i, !0);\n            if (u) return u(i, !0);\n            var a = new Error(\"Cannot find module '\" + i + \"'\");\n            throw a.code = \"MODULE_NOT_FOUND\", a;\n          }\n\n          var p = n[i] = {\n            exports: {}\n          };\n          e[i][0].call(p.exports, function (r) {\n            var n = e[i][1][r];\n            return o(n || r);\n          }, p, p.exports, r, e, n, t);\n        }\n\n        return n[i].exports;\n      }\n\n      for (var u = \"function\" == typeof require && require, i = 0; i < t.length; i++) {\n        o(t[i]);\n      }\n\n      return o;\n    }\n\n    return r;\n  }()({\n    1: [function (require, module, exports) {\n      /**\n       * Helpers.\n       */\n      var s = 1000;\n      var m = s * 60;\n      var h = m * 60;\n      var d = h * 24;\n      var w = d * 7;\n      var y = d * 365.25;\n      /**\n       * Parse or format the given `val`.\n       *\n       * Options:\n       *\n       *  - `long` verbose formatting [false]\n       *\n       * @param {String|Number} val\n       * @param {Object} [options]\n       * @throws {Error} throw an error if val is not a non-empty string or a number\n       * @return {String|Number}\n       * @api public\n       */\n\n      module.exports = function (val, options) {\n        options = options || {};\n\n        var type = _typeof(val);\n\n        if (type === 'string' && val.length > 0) {\n          return parse(val);\n        } else if (type === 'number' && isNaN(val) === false) {\n          return options.long ? fmtLong(val) : fmtShort(val);\n        }\n\n        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));\n      };\n      /**\n       * Parse the given `str` and return milliseconds.\n       *\n       * @param {String} str\n       * @return {Number}\n       * @api private\n       */\n\n\n      function parse(str) {\n        str = String(str);\n\n        if (str.length > 100) {\n          return;\n        }\n\n        var match = /^((?:\\d+)?\\-?\\d?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);\n\n        if (!match) {\n          return;\n        }\n\n        var n = parseFloat(match[1]);\n        var type = (match[2] || 'ms').toLowerCase();\n\n        switch (type) {\n          case 'years':\n          case 'year':\n          case 'yrs':\n          case 'yr':\n          case 'y':\n            return n * y;\n\n          case 'weeks':\n          case 'week':\n          case 'w':\n            return n * w;\n\n          case 'days':\n          case 'day':\n          case 'd':\n            return n * d;\n\n          case 'hours':\n          case 'hour':\n          case 'hrs':\n          case 'hr':\n          case 'h':\n            return n * h;\n\n          case 'minutes':\n          case 'minute':\n          case 'mins':\n          case 'min':\n          case 'm':\n            return n * m;\n\n          case 'seconds':\n          case 'second':\n          case 'secs':\n          case 'sec':\n          case 's':\n            return n * s;\n\n          case 'milliseconds':\n          case 'millisecond':\n          case 'msecs':\n          case 'msec':\n          case 'ms':\n            return n;\n\n          default:\n            return undefined;\n        }\n      }\n      /**\n       * Short format for `ms`.\n       *\n       * @param {Number} ms\n       * @return {String}\n       * @api private\n       */\n\n\n      function fmtShort(ms) {\n        var msAbs = Math.abs(ms);\n\n        if (msAbs >= d) {\n          return Math.round(ms / d) + 'd';\n        }\n\n        if (msAbs >= h) {\n          return Math.round(ms / h) + 'h';\n        }\n\n        if (msAbs >= m) {\n          return Math.round(ms / m) + 'm';\n        }\n\n        if (msAbs >= s) {\n          return Math.round(ms / s) + 's';\n        }\n\n        return ms + 'ms';\n      }\n      /**\n       * Long format for `ms`.\n       *\n       * @param {Number} ms\n       * @return {String}\n       * @api private\n       */\n\n\n      function fmtLong(ms) {\n        var msAbs = Math.abs(ms);\n\n        if (msAbs >= d) {\n          return plural(ms, msAbs, d, 'day');\n        }\n\n        if (msAbs >= h) {\n          return plural(ms, msAbs, h, 'hour');\n        }\n\n        if (msAbs >= m) {\n          return plural(ms, msAbs, m, 'minute');\n        }\n\n        if (msAbs >= s) {\n          return plural(ms, msAbs, s, 'second');\n        }\n\n        return ms + ' ms';\n      }\n      /**\n       * Pluralization helper.\n       */\n\n\n      function plural(ms, msAbs, n, name) {\n        var isPlural = msAbs >= n * 1.5;\n        return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');\n      }\n    }, {}],\n    2: [function (require, module, exports) {\n      // shim for using process in browser\n      var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it\n      // don't break things.  But we need to wrap it in a try catch in case it is\n      // wrapped in strict mode code which doesn't define any globals.  It's inside a\n      // function because try/catches deoptimize in certain engines.\n\n      var cachedSetTimeout;\n      var cachedClearTimeout;\n\n      function defaultSetTimout() {\n        throw new Error('setTimeout has not been defined');\n      }\n\n      function defaultClearTimeout() {\n        throw new Error('clearTimeout has not been defined');\n      }\n\n      (function () {\n        try {\n          if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n          } else {\n            cachedSetTimeout = defaultSetTimout;\n          }\n        } catch (e) {\n          cachedSetTimeout = defaultSetTimout;\n        }\n\n        try {\n          if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n          } else {\n            cachedClearTimeout = defaultClearTimeout;\n          }\n        } catch (e) {\n          cachedClearTimeout = defaultClearTimeout;\n        }\n      })();\n\n      function runTimeout(fun) {\n        if (cachedSetTimeout === setTimeout) {\n          //normal enviroments in sane situations\n          return setTimeout(fun, 0);\n        } // if setTimeout wasn't available but was latter defined\n\n\n        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n          cachedSetTimeout = setTimeout;\n          return setTimeout(fun, 0);\n        }\n\n        try {\n          // when when somebody has screwed with setTimeout but no I.E. maddness\n          return cachedSetTimeout(fun, 0);\n        } catch (e) {\n          try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n          } catch (e) {\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n          }\n        }\n      }\n\n      function runClearTimeout(marker) {\n        if (cachedClearTimeout === clearTimeout) {\n          //normal enviroments in sane situations\n          return clearTimeout(marker);\n        } // if clearTimeout wasn't available but was latter defined\n\n\n        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n          cachedClearTimeout = clearTimeout;\n          return clearTimeout(marker);\n        }\n\n        try {\n          // when when somebody has screwed with setTimeout but no I.E. maddness\n          return cachedClearTimeout(marker);\n        } catch (e) {\n          try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n          } catch (e) {\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n          }\n        }\n      }\n\n      var queue = [];\n      var draining = false;\n      var currentQueue;\n      var queueIndex = -1;\n\n      function cleanUpNextTick() {\n        if (!draining || !currentQueue) {\n          return;\n        }\n\n        draining = false;\n\n        if (currentQueue.length) {\n          queue = currentQueue.concat(queue);\n        } else {\n          queueIndex = -1;\n        }\n\n        if (queue.length) {\n          drainQueue();\n        }\n      }\n\n      function drainQueue() {\n        if (draining) {\n          return;\n        }\n\n        var timeout = runTimeout(cleanUpNextTick);\n        draining = true;\n        var len = queue.length;\n\n        while (len) {\n          currentQueue = queue;\n          queue = [];\n\n          while (++queueIndex < len) {\n            if (currentQueue) {\n              currentQueue[queueIndex].run();\n            }\n          }\n\n          queueIndex = -1;\n          len = queue.length;\n        }\n\n        currentQueue = null;\n        draining = false;\n        runClearTimeout(timeout);\n      }\n\n      process.nextTick = function (fun) {\n        var args = new Array(arguments.length - 1);\n\n        if (arguments.length > 1) {\n          for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n          }\n        }\n\n        queue.push(new Item(fun, args));\n\n        if (queue.length === 1 && !draining) {\n          runTimeout(drainQueue);\n        }\n      }; // v8 likes predictible objects\n\n\n      function Item(fun, array) {\n        this.fun = fun;\n        this.array = array;\n      }\n\n      Item.prototype.run = function () {\n        this.fun.apply(null, this.array);\n      };\n\n      process.title = 'browser';\n      process.browser = true;\n      process.env = {};\n      process.argv = [];\n      process.version = ''; // empty string to avoid regexp issues\n\n      process.versions = {};\n\n      function noop() {}\n\n      process.on = noop;\n      process.addListener = noop;\n      process.once = noop;\n      process.off = noop;\n      process.removeListener = noop;\n      process.removeAllListeners = noop;\n      process.emit = noop;\n      process.prependListener = noop;\n      process.prependOnceListener = noop;\n\n      process.listeners = function (name) {\n        return [];\n      };\n\n      process.binding = function (name) {\n        throw new Error('process.binding is not supported');\n      };\n\n      process.cwd = function () {\n        return '/';\n      };\n\n      process.chdir = function (dir) {\n        throw new Error('process.chdir is not supported');\n      };\n\n      process.umask = function () {\n        return 0;\n      };\n    }, {}],\n    3: [function (require, module, exports) {\n      /**\n       * This is the common logic for both the Node.js and web browser\n       * implementations of `debug()`.\n       */\n      function setup(env) {\n        createDebug.debug = createDebug;\n        createDebug.default = createDebug;\n        createDebug.coerce = coerce;\n        createDebug.disable = disable;\n        createDebug.enable = enable;\n        createDebug.enabled = enabled;\n        createDebug.humanize = require('ms');\n        Object.keys(env).forEach(function (key) {\n          createDebug[key] = env[key];\n        });\n        /**\n        * Active `debug` instances.\n        */\n\n        createDebug.instances = [];\n        /**\n        * The currently active debug mode names, and names to skip.\n        */\n\n        createDebug.names = [];\n        createDebug.skips = [];\n        /**\n        * Map of special \"%n\" handling functions, for the debug \"format\" argument.\n        *\n        * Valid key names are a single, lower or upper-case letter, i.e. \"n\" and \"N\".\n        */\n\n        createDebug.formatters = {};\n        /**\n        * Selects a color for a debug namespace\n        * @param {String} namespace The namespace string for the for the debug instance to be colored\n        * @return {Number|String} An ANSI color code for the given namespace\n        * @api private\n        */\n\n        function selectColor(namespace) {\n          var hash = 0;\n\n          for (var i = 0; i < namespace.length; i++) {\n            hash = (hash << 5) - hash + namespace.charCodeAt(i);\n            hash |= 0; // Convert to 32bit integer\n          }\n\n          return createDebug.colors[Math.abs(hash) % createDebug.colors.length];\n        }\n\n        createDebug.selectColor = selectColor;\n        /**\n        * Create a debugger with the given `namespace`.\n        *\n        * @param {String} namespace\n        * @return {Function}\n        * @api public\n        */\n\n        function createDebug(namespace) {\n          var prevTime;\n\n          function debug() {\n            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n              args[_key] = arguments[_key];\n            }\n\n            // Disabled?\n            if (!debug.enabled) {\n              return;\n            }\n\n            var self = debug; // Set `diff` timestamp\n\n            var curr = Number(new Date());\n            var ms = curr - (prevTime || curr);\n            self.diff = ms;\n            self.prev = prevTime;\n            self.curr = curr;\n            prevTime = curr;\n            args[0] = createDebug.coerce(args[0]);\n\n            if (typeof args[0] !== 'string') {\n              // Anything else let's inspect with %O\n              args.unshift('%O');\n            } // Apply any `formatters` transformations\n\n\n            var index = 0;\n            args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {\n              // If we encounter an escaped % then don't increase the array index\n              if (match === '%%') {\n                return match;\n              }\n\n              index++;\n              var formatter = createDebug.formatters[format];\n\n              if (typeof formatter === 'function') {\n                var val = args[index];\n                match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`\n\n                args.splice(index, 1);\n                index--;\n              }\n\n              return match;\n            }); // Apply env-specific formatting (colors, etc.)\n\n            createDebug.formatArgs.call(self, args);\n            var logFn = self.log || createDebug.log;\n            logFn.apply(self, args);\n          }\n\n          debug.namespace = namespace;\n          debug.enabled = createDebug.enabled(namespace);\n          debug.useColors = createDebug.useColors();\n          debug.color = selectColor(namespace);\n          debug.destroy = destroy;\n          debug.extend = extend; // Debug.formatArgs = formatArgs;\n          // debug.rawLog = rawLog;\n          // env-specific initialization logic for debug instances\n\n          if (typeof createDebug.init === 'function') {\n            createDebug.init(debug);\n          }\n\n          createDebug.instances.push(debug);\n          return debug;\n        }\n\n        function destroy() {\n          var index = createDebug.instances.indexOf(this);\n\n          if (index !== -1) {\n            createDebug.instances.splice(index, 1);\n            return true;\n          }\n\n          return false;\n        }\n\n        function extend(namespace, delimiter) {\n          return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);\n        }\n        /**\n        * Enables a debug mode by namespaces. This can include modes\n        * separated by a colon and wildcards.\n        *\n        * @param {String} namespaces\n        * @api public\n        */\n\n\n        function enable(namespaces) {\n          createDebug.save(namespaces);\n          createDebug.names = [];\n          createDebug.skips = [];\n          var i;\n          var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\\s,]+/);\n          var len = split.length;\n\n          for (i = 0; i < len; i++) {\n            if (!split[i]) {\n              // ignore empty strings\n              continue;\n            }\n\n            namespaces = split[i].replace(/\\*/g, '.*?');\n\n            if (namespaces[0] === '-') {\n              createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));\n            } else {\n              createDebug.names.push(new RegExp('^' + namespaces + '$'));\n            }\n          }\n\n          for (i = 0; i < createDebug.instances.length; i++) {\n            var instance = createDebug.instances[i];\n            instance.enabled = createDebug.enabled(instance.namespace);\n          }\n        }\n        /**\n        * Disable debug output.\n        *\n        * @api public\n        */\n\n\n        function disable() {\n          createDebug.enable('');\n        }\n        /**\n        * Returns true if the given mode name is enabled, false otherwise.\n        *\n        * @param {String} name\n        * @return {Boolean}\n        * @api public\n        */\n\n\n        function enabled(name) {\n          if (name[name.length - 1] === '*') {\n            return true;\n          }\n\n          var i;\n          var len;\n\n          for (i = 0, len = createDebug.skips.length; i < len; i++) {\n            if (createDebug.skips[i].test(name)) {\n              return false;\n            }\n          }\n\n          for (i = 0, len = createDebug.names.length; i < len; i++) {\n            if (createDebug.names[i].test(name)) {\n              return true;\n            }\n          }\n\n          return false;\n        }\n        /**\n        * Coerce `val`.\n        *\n        * @param {Mixed} val\n        * @return {Mixed}\n        * @api private\n        */\n\n\n        function coerce(val) {\n          if (val instanceof Error) {\n            return val.stack || val.message;\n          }\n\n          return val;\n        }\n\n        createDebug.enable(createDebug.load());\n        return createDebug;\n      }\n\n      module.exports = setup;\n    }, {\n      \"ms\": 1\n    }],\n    4: [function (require, module, exports) {\n      (function (process) {\n        /* eslint-env browser */\n\n        /**\n         * This is the web browser implementation of `debug()`.\n         */\n        exports.log = log;\n        exports.formatArgs = formatArgs;\n        exports.save = save;\n        exports.load = load;\n        exports.useColors = useColors;\n        exports.storage = localstorage();\n        /**\n         * Colors.\n         */\n\n        exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];\n        /**\n         * Currently only WebKit-based Web Inspectors, Firefox >= v31,\n         * and the Firebug extension (any Firefox version) are known\n         * to support \"%c\" CSS customizations.\n         *\n         * TODO: add a `localStorage` variable to explicitly enable/disable colors\n         */\n        // eslint-disable-next-line complexity\n\n        function useColors() {\n          // NB: In an Electron preload script, document will be defined but not fully\n          // initialized. Since we know we're in Chrome, we'll just detect this case\n          // explicitly\n          if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {\n            return true;\n          } // Internet Explorer and Edge do not support colors.\n\n\n          if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\\/(\\d+)/)) {\n            return false;\n          } // Is webkit? http://stackoverflow.com/a/16459606/376773\n          // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632\n\n\n          return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773\n          typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?\n          // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages\n          typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker\n          typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\\/(\\d+)/);\n        }\n        /**\n         * Colorize log arguments if enabled.\n         *\n         * @api public\n         */\n\n\n        function formatArgs(args) {\n          args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);\n\n          if (!this.useColors) {\n            return;\n          }\n\n          var c = 'color: ' + this.color;\n          args.splice(1, 0, c, 'color: inherit'); // The final \"%c\" is somewhat tricky, because there could be other\n          // arguments passed either before or after the %c, so we need to\n          // figure out the correct index to insert the CSS into\n\n          var index = 0;\n          var lastC = 0;\n          args[0].replace(/%[a-zA-Z%]/g, function (match) {\n            if (match === '%%') {\n              return;\n            }\n\n            index++;\n\n            if (match === '%c') {\n              // We only are interested in the *last* %c\n              // (the user may have provided their own)\n              lastC = index;\n            }\n          });\n          args.splice(lastC, 0, c);\n        }\n        /**\n         * Invokes `console.log()` when available.\n         * No-op when `console.log` is not a \"function\".\n         *\n         * @api public\n         */\n\n\n        function log() {\n          var _console;\n\n          // This hackery is required for IE8/9, where\n          // the `console.log` function doesn't have 'apply'\n          return (typeof console === \"undefined\" ? \"undefined\" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);\n        }\n        /**\n         * Save `namespaces`.\n         *\n         * @param {String} namespaces\n         * @api private\n         */\n\n\n        function save(namespaces) {\n          try {\n            if (namespaces) {\n              exports.storage.setItem('debug', namespaces);\n            } else {\n              exports.storage.removeItem('debug');\n            }\n          } catch (error) {// Swallow\n            // XXX (@Qix-) should we be logging these?\n          }\n        }\n        /**\n         * Load `namespaces`.\n         *\n         * @return {String} returns the previously persisted debug modes\n         * @api private\n         */\n\n\n        function load() {\n          var r;\n\n          try {\n            r = exports.storage.getItem('debug');\n          } catch (error) {} // Swallow\n          // XXX (@Qix-) should we be logging these?\n          // If debug isn't set in LS, and we're in Electron, try to load $DEBUG\n\n\n          if (!r && typeof process !== 'undefined' && 'env' in process) {\n            r = process.env.DEBUG;\n          }\n\n          return r;\n        }\n        /**\n         * Localstorage attempts to return the localstorage.\n         *\n         * This is necessary because safari throws\n         * when a user disables cookies/localstorage\n         * and you attempt to access it.\n         *\n         * @return {LocalStorage}\n         * @api private\n         */\n\n\n        function localstorage() {\n          try {\n            // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context\n            // The Browser also has localStorage in the global context.\n            return localStorage;\n          } catch (error) {// Swallow\n            // XXX (@Qix-) should we be logging these?\n          }\n        }\n\n        module.exports = require('./common')(exports);\n        var formatters = module.exports.formatters;\n        /**\n         * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.\n         */\n\n        formatters.j = function (v) {\n          try {\n            return JSON.stringify(v);\n          } catch (error) {\n            return '[UnexpectedJSONParseError]: ' + error.message;\n          }\n        };\n      }).call(this, require('_process'));\n    }, {\n      \"./common\": 3,\n      \"_process\": 2\n    }]\n  }, {}, [4])(4);\n});\n\n\n\n//# sourceURL=webpack://Log4js/./node_modules/debug/dist/debug.js?");

/***/ }),

/***/ "./src/Logger.js":
/*!***********************!*\
  !*** ./src/Logger.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar debug = __webpack_require__(/*! debug/dist/debug */ \"./node_modules/debug/dist/debug.js\");\n\nvar LogSeverity = {\n  DEFAULT: 0,\n  DEBUG: 100,\n  INFO: 200,\n  NOTICE: 300,\n  WARNING: 400,\n  ERROR: 500,\n  CRITICAL: 600,\n  ALERT: 700,\n  EMERGENCY: 800\n};\nvar LogLevel = {\n  0: 'DEFAILT',\n  100: 'DEBUG',\n  200: 'INFO',\n  300: 'NOTICE',\n  400: 'WARNING',\n  500: 'ERROR',\n  600: 'CRITICAL',\n  700: 'ALERT',\n  800: 'EMERGENCY'\n};\n\nfunction padLeft(str, len) {\n  var s = '' + str;\n  return s.length >= len ? s : padLeft('0' + s, len);\n}\n\nfunction getDateTime() {\n  var d = new Date();\n  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + padLeft(d.getHours(), 2) + ':' + padLeft(d.getMinutes(), 2) + ':' + padLeft(d.getSeconds(), 2) + ':' + d.getMilliseconds();\n}\n\nvar Logger =\n/*#__PURE__*/\nfunction () {\n  function Logger() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Log4js';\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, Logger);\n\n    this.name = name || 'Log4js';\n    this.options = options || {};\n    this.logger = debug(this.name);\n  }\n\n  _createClass(Logger, [{\n    key: \"write\",\n    value: function write() {\n      var level = arguments[0];\n      var args = arguments[1];\n      var info = \"\".concat(LogLevel[level], \" \").concat(getDateTime(), \" \");\n      var output = [info].concat(args);\n      this.logger.apply(this.logger, output);\n    }\n  }, {\n    key: \"log\",\n    value: function log() {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      this.write(LogSeverity.DEFAULT, args);\n    }\n  }, {\n    key: \"debug\",\n    value: function debug() {\n      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n\n      this.write(LogSeverity.DEBUG, args);\n    }\n  }, {\n    key: \"info\",\n    value: function info() {\n      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n        args[_key3] = arguments[_key3];\n      }\n\n      this.write(LogSeverity.INFO, args);\n    }\n  }, {\n    key: \"notice\",\n    value: function notice() {\n      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n        args[_key4] = arguments[_key4];\n      }\n\n      this.write(LogSeverity.NOTICE, args);\n    }\n  }, {\n    key: \"warning\",\n    value: function warning() {\n      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n        args[_key5] = arguments[_key5];\n      }\n\n      this.write(LogSeverity.WARNING, args);\n    }\n  }, {\n    key: \"error\",\n    value: function error() {\n      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {\n        args[_key6] = arguments[_key6];\n      }\n\n      this.write(LogSeverity.ERROR, args);\n    }\n  }, {\n    key: \"crit\",\n    value: function crit() {\n      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {\n        args[_key7] = arguments[_key7];\n      }\n\n      this.write(LogSeverity.CRITICAL, args);\n    }\n  }, {\n    key: \"alter\",\n    value: function alter() {\n      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {\n        args[_key8] = arguments[_key8];\n      }\n\n      this.write(LogSeverity.ALERT, args);\n    }\n  }, {\n    key: \"emerg\",\n    value: function emerg() {\n      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {\n        args[_key9] = arguments[_key9];\n      }\n\n      this.write(LogSeverity.EMERGENCY, args);\n    }\n  }], [{\n    key: \"getLogger\",\n    value: function getLogger(name, options) {\n      return new Logger(name, options);\n    }\n  }]);\n\n  return Logger;\n}();\n\nmodule.exports = Logger;\n\n//# sourceURL=webpack://Log4js/./src/Logger.js?");

/***/ })

/******/ });
});