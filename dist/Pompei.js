(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["Pompei"] = factory();
	else
		root["Pompei"] = factory();
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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsErrors = __webpack_require__(1);

	var _Device = __webpack_require__(2);

	var _Device2 = _interopRequireDefault(_Device);

	var _Mesh = __webpack_require__(3);

	var _Mesh2 = _interopRequireDefault(_Mesh);

	exports['default'] = {
	  Device: _Device2['default'],
	  Mesh: _Mesh2['default'],

	  PompeiError: _utilsErrors.PompeiError,
	  WebGLSupportError: _utilsErrors.WebGLSupportError
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PompeiError = (function (_Error) {
	  _inherits(PompeiError, _Error);

	  function PompeiError(message) {
	    _classCallCheck(this, PompeiError);

	    _get(Object.getPrototypeOf(PompeiError.prototype), 'constructor', this).call(this);
	    this.message = message;
	    this.stack = new Error().stack;
	    this.name = this.constructor.name;
	  }

	  return PompeiError;
	})(Error);

	var WebGLSupportError = (function (_PompeiError) {
	  _inherits(WebGLSupportError, _PompeiError);

	  function WebGLSupportError(m) {
	    _classCallCheck(this, WebGLSupportError);

	    _get(Object.getPrototypeOf(WebGLSupportError.prototype), 'constructor', this).call(this, m);
	    this.message = m || 'WebGL is not supported';
	  }

	  return WebGLSupportError;
	})(PompeiError);

	exports['default'] = {
	  PompeiError: PompeiError,
	  WebGLSupportError: WebGLSupportError
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsErrors = __webpack_require__(1);

	var Device = function Device(canvas, options) {
	  _classCallCheck(this, Device);

	  if (!(canvas && typeof canvas.getContext === 'function')) {
	    throw new _utilsErrors.PompeiError('Bad Parameters');
	  }
	  options = options || {};

	  try {
	    this._gl = canvas.getContext('webgl', options) || canvas.getContext('experimental-webgl', options);
	  } catch (e) {
	    throw new _utilsErrors.WebGLSupportError();
	  }

	  if (!this._gl) {
	    throw new _utilsErrors.WebGLSupportError();
	  }
	};

	exports['default'] = Device;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsErrors = __webpack_require__(1);

	var Mesh =
	/**
	 * @constructor
	 * @param {string} name.
	 * @param {object} options
	 */
	function Mesh(name, options) {
	  _classCallCheck(this, Mesh);

	  if (!name) {
	    throw new _utilsErrors.PompeiError('Bad Parameters : Mesh needs a name');
	  }
	  options = options || {};

	  this._name = name + '';
	};

	exports['default'] = Mesh;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;