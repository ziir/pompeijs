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

	var _Vertex = __webpack_require__(4);

	var _Vertex2 = _interopRequireDefault(_Vertex);

	var _Vector = __webpack_require__(5);

	var _Vector2 = _interopRequireDefault(_Vector);

	exports['default'] = {
	  Device: _Device2['default'],
	  Mesh: _Mesh2['default'],
	  Vertex: _Vertex2['default'],
	  Vector: _Vector2['default'],

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
	  this._options = options || {};

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
	var _bind = Function.prototype.bind;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsErrors = __webpack_require__(1);

	var _Vertex = __webpack_require__(4);

	var _Vertex2 = _interopRequireDefault(_Vertex);

	var Mesh = (function () {
	  /**
	   * @constructor
	   * @param {object} geometry.
	   * @param {object} options
	   */

	  function Mesh(geometry, material, options) {
	    _classCallCheck(this, Mesh);

	    this._material = Object.assign({ opacity: 1, color: '#F4F4F4' }, material);
	    this._geometry = Object.assign({
	      position: [0, 0, 0],
	      scale: [1, 1, 1]
	    }, geometry);

	    this._vertices = [];

	    this._options = Object.assign({ name: '' }, options);
	  }

	  _createClass(Mesh, [{
	    key: 'createVertex',
	    value: function createVertex() {
	      return this._vertices[this.addVertex(new (_bind.apply(_Vertex2['default'], [null].concat(_toConsumableArray(args))))())];
	    }
	  }, {
	    key: 'addVertex',
	    value: function addVertex(vertex) {
	      return this._vertices.push(vertex);
	    }
	  }, {
	    key: 'removeVertex',
	    value: function removeVertex(vertex) {
	      var idx = this._vertices.indexOf(vertex);
	      !(idx !== -1) || array.splice(idx, 1);
	    }
	  }]);

	  return Mesh;
	})();

	exports['default'] = Mesh;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _Vector = __webpack_require__(5);

	var _Vector2 = _interopRequireDefault(_Vector);

	var Vertex = function Vertex(vector) {
	  _classCallCheck(this, Vertex);

	  vector instanceof vector || function () {
	    throw new PompeiError('Bad Parameters: constructor(vector)');
	  };

	  this._vector = vector;
	};

	exports['default'] = Vertex;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Vector = (function () {
	  function Vector(position) {
	    _classCallCheck(this, Vector);

	    this.x = position[0];
	    this.y = position[1];
	    this.z = position[2];
	  }

	  _createClass(Vector, [{
	    key: "addInPlace",
	    value: function addInPlace(otherVector) {
	      this.x += otherVector.x;
	      this.y += otherVector.y;
	      this.z += otherVector.z;

	      return this;
	    }
	  }, {
	    key: "add",
	    value: function add(otherVector) {
	      return new Vector(this.x + otherVector.x, this.y + otherVector.y, this.z + otherVector.z);
	    }
	  }, {
	    key: "addToRef",
	    value: function addToRef(otherVector, result) {
	      result.x = this.x + otherVector.x;
	      result.y = this.y + otherVector.y;
	      result.z = this.z + otherVector.z;

	      return this;
	    }
	  }, {
	    key: "subtractInPlace",
	    value: function subtractInPlace(otherVector) {
	      this.x -= otherVector.x;
	      this.y -= otherVector.y;
	      this.z -= otherVector.z;

	      return this;
	    }
	  }, {
	    key: "subtract",
	    value: function subtract(otherVector) {
	      return new Vector(this.x - otherVector.x, this.y - otherVector.y, this.z - otherVector.z);
	    }
	  }, {
	    key: "subtractToRef",
	    value: function subtractToRef(otherVector, result) {
	      result.x = this.x - otherVector.x;
	      result.y = this.y - otherVector.y;
	      result.z = this.z - otherVector.z;

	      return this;
	    }
	  }]);

	  return Vector;
	})();

	exports["default"] = Vector;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;