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

	var _Device = __webpack_require__(1);

	var _Device2 = _interopRequireDefault(_Device);

	var _Renderer = __webpack_require__(2);

	var _Renderer2 = _interopRequireDefault(_Renderer);

	var _Scene = __webpack_require__(7);

	var _Scene2 = _interopRequireDefault(_Scene);

	var _Matrix = __webpack_require__(4);

	var _Matrix2 = _interopRequireDefault(_Matrix);

	var _Mesh = __webpack_require__(8);

	var _Mesh2 = _interopRequireDefault(_Mesh);

	var _Vertex = __webpack_require__(10);

	var _Vertex2 = _interopRequireDefault(_Vertex);

	var _VertexBuffer = __webpack_require__(9);

	var _VertexBuffer2 = _interopRequireDefault(_VertexBuffer);

	var _Vector = __webpack_require__(5);

	var _Vector2 = _interopRequireDefault(_Vector);

	var _utilsErrors = __webpack_require__(3);

	exports['default'] = {
	  Device: _Device2['default'],
	  Renderer: _Renderer2['default'],
	  Scene: _Scene2['default'],

	  Matrix: _Matrix2['default'],

	  Mesh: _Mesh2['default'],
	  Vertex: _Vertex2['default'],
	  VertexBuffer: _VertexBuffer2['default'],
	  Vector: _Vector2['default'],

	  PompeiError: _utilsErrors.PompeiError,
	  WebGLSupportError: _utilsErrors.WebGLSupportError
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _Renderer = __webpack_require__(2);

	var _Renderer2 = _interopRequireDefault(_Renderer);

	var _Scene = __webpack_require__(7);

	var _Scene2 = _interopRequireDefault(_Scene);

	var _utilsErrors = __webpack_require__(3);

	var Device = (function () {
	  function Device(canvas, options) {
	    _classCallCheck(this, Device);

	    if (!(canvas && typeof canvas.getContext === 'function')) {
	      throw new _utilsErrors.PompeiError('Bad Parameters');
	    }
	    this._options = options || {};

	    this.gl = canvas.getContext('webgl', options) || canvas.getContext('experimental-webgl', options);

	    this._renderer = new _Renderer2['default'](this.gl, options);
	    this._scene = new _Scene2['default'](this.renderer, options);
	  }

	  _createClass(Device, [{
	    key: 'gl',
	    get: function get() {
	      return this._gl;
	    },
	    set: function set(context) {
	      try {
	        this._gl = context;
	      } catch (e) {
	        throw new _utilsErrors.WebGLSupportError();
	      }

	      if (!this.gl) {
	        throw new _utilsErrors.WebGLSupportError();
	      }
	    }
	  }, {
	    key: 'renderer',
	    get: function get() {
	      return this._renderer;
	    }
	  }, {
	    key: 'scene',
	    get: function get() {
	      return this._scene;
	    }
	  }]);

	  return Device;
	})();

	exports['default'] = Device;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsErrors = __webpack_require__(3);

	var _MatrixJs = __webpack_require__(4);

	var _MatrixJs2 = _interopRequireDefault(_MatrixJs);

	var Renderer = function Renderer(context, options) {
	  _classCallCheck(this, Renderer);

	  if (!context) {
	    throw new _utilsErrors.PompeiError('Bad Parameters: constructor(context, options)');
	  }
	  options = options || {};

	  // Custom functions
	  this.onDraw = function onDraw() {};

	  // Transformations
	  this._worldMatrix = _MatrixJs2['default'].Identity();
	  this._viewMatrix = _MatrixJs2['default'].Identity();
	  this._projectionMatrix = _MatrixJs2['default'].Identity();
	};

	exports['default'] = Renderer;
	module.exports = exports['default'];

/***/ },
/* 3 */
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

	exports.PompeiError = PompeiError;

	var WebGLSupportError = (function (_PompeiError) {
	  _inherits(WebGLSupportError, _PompeiError);

	  function WebGLSupportError(m) {
	    _classCallCheck(this, WebGLSupportError);

	    _get(Object.getPrototypeOf(WebGLSupportError.prototype), 'constructor', this).call(this, m);
	    this.message = m || 'WebGL is not supported';
	  }

	  return WebGLSupportError;
	})(PompeiError);

	exports.WebGLSupportError = WebGLSupportError;
	exports['default'] = {
	  PompeiError: PompeiError,
	  WebGLSupportError: WebGLSupportError
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsErrors = __webpack_require__(3);

	var _Vector = __webpack_require__(5);

	var _Vector2 = _interopRequireDefault(_Vector);

	var _Core = __webpack_require__(6);

	var _Core2 = _interopRequireDefault(_Core);

	var Matrix = (function () {
	  function Matrix(array) {
	    _classCallCheck(this, Matrix);

	    this.m = new Float32Array(16);

	    if (array && array.length === 16) {
	      for (var i = 0; i < array.length; i++) {
	        this.m[i] = array[i];
	      }
	    } else {
	      this.m = Matrix.Identity().m;
	    }
	  }

	  _createClass(Matrix, [{
	    key: 'multiply',
	    value: function multiply(other) {
	      // Simplify the reading by creating temporary variables
	      var m1 = this.m;
	      var m2 = other.m;
	      var m3 = new Matrix().m;

	      m3[0] = m1[0] * m2[0] + m1[4] * m2[1] + m1[8] * m2[2] + m1[12] * m2[3];
	      m3[1] = m1[1] * m2[0] + m1[5] * m2[1] + m1[9] * m2[2] + m1[13] * m2[3];
	      m3[2] = m1[2] * m2[0] + m1[6] * m2[1] + m1[10] * m2[2] + m1[14] * m2[3];
	      m3[3] = m1[3] * m2[0] + m1[7] * m2[1] + m1[11] * m2[2] + m1[15] * m2[3];

	      m3[4] = m1[0] * m2[4] + m1[4] * m2[5] + m1[8] * m2[6] + m1[12] * m2[7];
	      m3[5] = m1[1] * m2[4] + m1[5] * m2[5] + m1[9] * m2[6] + m1[13] * m2[7];
	      m3[6] = m1[2] * m2[4] + m1[6] * m2[5] + m1[10] * m2[6] + m1[14] * m2[7];
	      m3[7] = m1[3] * m2[4] + m1[7] * m2[5] + m1[11] * m2[6] + m1[15] * m2[7];

	      m3[8] = m1[0] * m2[8] + m1[4] * m2[9] + m1[8] * m2[10] + m1[12] * m2[11];
	      m3[9] = m1[1] * m2[8] + m1[5] * m2[9] + m1[9] * m2[10] + m1[13] * m2[11];
	      m3[10] = m1[2] * m2[8] + m1[6] * m2[9] + m1[10] * m2[10] + m1[14] * m2[11];
	      m3[11] = m1[3] * m2[8] + m1[7] * m2[9] + m1[11] * m2[10] + m1[15] * m2[11];

	      m3[12] = m1[0] * m2[12] + m1[4] * m2[13] + m1[8] * m2[14] + m1[12] * m2[15];
	      m3[13] = m1[1] * m2[12] + m1[5] * m2[13] + m1[9] * m2[14] + m1[13] * m2[15];
	      m3[14] = m1[2] * m2[12] + m1[6] * m2[13] + m1[10] * m2[14] + m1[14] * m2[15];
	      m3[15] = m1[3] * m2[12] + m1[7] * m2[13] + m1[11] * m2[14] + m1[15] * m2[15];

	      return m3;
	    }
	  }, {
	    key: 'multiplyScalar',
	    value: function multiplyScalar(scalar) {
	      for (var i = 0; i < 16; i++) {
	        this.m[i] *= scalar;
	      }

	      return this;
	    }
	  }, {
	    key: 'plus',
	    value: function plus(other) {
	      for (var i = 0; i < 16; i++) {
	        this.m[i] += other.m[i];
	      }

	      return this;
	    }
	  }, {
	    key: 'minus',
	    value: function minus(other) {
	      for (var i = 0; i < 16; i++) {
	        this.m[i] -= other.m[i];
	      }

	      return this;
	    }
	  }, {
	    key: 'getTranslation',
	    value: function getTranslation(result) {
	      if (result) {
	        result.x = this.m[12];
	        result.y = this.m[13];
	        result.z = this.m[14];
	        return result;
	      }

	      return new _Vector2['default']([this.m[12], this.m[13], this.m[14]]);
	    }
	  }, {
	    key: 'setTranslation',
	    value: function setTranslation(translation) {
	      this.m[12] = -translation.x;
	      this.m[13] = -translation.y;
	      this.m[14] = -translation.z;

	      return this;
	    }
	  }, {
	    key: 'setScale',
	    value: function setScale(scale) {
	      this.m[0] = scale.x;
	      this.m[5] = scale.y;
	      this.m[10] = scale.z;

	      return this;
	    }
	  }, {
	    key: 'getScale',
	    value: function getScale(result) {
	      var x = undefined,
	          y = undefined,
	          z = undefined;
	      // Rotation before
	      if (this.m[1] === 0 && this.m[2] === 0 && this.m[4] === 0 && this.m[6] === 0 && this.m[8] === 0 && this.m[9] === 0) {
	        x = this.m[0];
	        y = this.m[5];
	        z = this.m[10];

	        if (result) {
	          result.x = x;
	          result.y = y;
	          result.z = z;

	          return result;
	        }

	        return new _Vector2['default']([x, y, z]);
	      }

	      // We have to do the full calculation.
	      x = this.m[0] * this.m[0] + this.m[1] * this.m[1] + this.m[2] * this.m[2];
	      y = this.m[4] * this.m[4] + this.m[5] * this.m[5] + this.m[6] * this.m[6];
	      z = this.m[8] * this.m[8] + this.m[9] * this.m[9] + this.m[10] * this.m[10];

	      if (result) {
	        result.x = x;
	        result.y = y;
	        result.z = z;

	        return result;
	      }

	      return new _Vector2['default']([x, y, z]);
	    }
	  }, {
	    key: 'setRotationDegrees',
	    value: function setRotationDegrees(rotation) {
	      this.setRotation(rotation * _Core2['default'].DegToRad());
	    }
	  }, {
	    key: 'setRotation',
	    value: function setRotation(rotation) {
	      var cr = Math.cos(rotation.x);
	      var sr = Math.sin(rotation.x);
	      var cp = Math.cos(rotation.y);
	      var sp = Math.sin(rotation.y);
	      var cy = Math.cos(rotation.z);
	      var sy = Math.sin(rotation.z);

	      this.m[0] = cp * cy;
	      this.m[1] = cp * sy;
	      this.m[2] = -sp;

	      var srsp = sr * sp;
	      var crsp = cr * sp;

	      this.m[4] = srsp * cy - cr * sy;
	      this.m[5] = srsp * sy + cr * cy;
	      this.m[6] = sr * cp;

	      this.m[8] = crsp * cy + sr * sy;
	      this.m[9] = crsp * sy - sr * cy;
	      this.m[10] = cr * cp;

	      return this;
	    }
	  }, {
	    key: 'getRotationDegrees',
	    value: function getRotationDegrees(result) {
	      result = this.getRotation(result);

	      result.x *= _Core2['default'].RadToDeg();
	      result.y *= _Core2['default'].RadToDeg();
	      result.z *= _Core2['default'].RadToDeg();

	      return result;
	    }
	  }, {
	    key: 'getRotation',
	    value: function getRotation(result) {
	      var mat = this.m;
	      var scale = this.getScale();

	      // Check negative scale
	      if (scale.y < 0.0 && scale.z < 0.0) {
	        scale.y = -scale.Y;
	        scale.z = -scale.Z;
	      } else if (scale.x < 0.0 && scale.z < 0.0) {
	        scale.x = -scale.x;
	        scale.z = -scale.z;
	      } else if (scale.x < 0.0 && scale.y < 0.0) {
	        scale.x = -scale.x;
	        scale.y = -scale.y;
	      }

	      var invScale = new _Vector2['default']([1.0 / scale.x, 1.0 / scale.y, 1.0 / scale.z]);

	      var Y = -Math.asin(_Core2['default'].Clamp(mat[2] * invScale.x, -1.0, 1.0));
	      var C = Math.cos(Y);
	      Y *= _Core2['default'].RadToDeg();

	      var rotx = undefined,
	          roty = undefined,
	          X = undefined,
	          Z = undefined;

	      if (C != 0.0) {
	        var invC = 1.0 / C;
	        rotx = mat[10] * invC * invScale.z;
	        roty = mat[6] * invC * invScale.y;
	        X = Math.atan2(roty, rotx) * _Core2['default'].RadToDeg();
	        rotx = mat[0] * invC * invScale.x;
	        roty = mat[1] * invC * invScale.x;
	        Z = Math.atan2(roty, rotx) * _Core2['default'].RadToDeg();
	      } else {
	        X = 0.0;
	        rotx = mat[5] * invScale.y;
	        roty = -mat[4] * invScale.y;
	        Z = Math.atan2(roty, rotx) * _Core2['default'].RadToDeg();
	      }

	      // fix values that get below zero
	      if (X < 0.0) {
	        X += 360.0;
	      }

	      if (Y < 0.0) {
	        Y += 360.0;
	      }

	      if (Z < 0.0) {
	        Z += 360.0;
	      }

	      if (result) {
	        result.x = X;
	        result.y = Y;
	        result.z = Z;

	        return result;
	      }

	      return new _Vector2['default']([X, Y, Z]);
	    }
	  }], [{
	    key: 'Identity',
	    value: function Identity(result) {
	      return Matrix.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	    }
	  }, {
	    key: 'FromValues',
	    value: function FromValues() {
	      if (arguments.length != 16) {
	        throw new _utilsErrors.PompeiError('Bad parameters: must have 16 parameters as numbers. FromValues(arguments)');
	      }

	      for (var i = 0; i < arguments.length; i++) {
	        this.m[i] = arguments[i];
	      }
	    }
	  }]);

	  return Matrix;
	})();

	exports['default'] = Matrix;
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

	var Vector3 = (function () {
	  function Vector3(other) {
	    _classCallCheck(this, Vector3);

	    this._x = 0.0;
	    this._y = 0.0;
	    this._z = 0.0;

	    if (other) {
	      this.set(other);
	    }
	  }

	  _createClass(Vector3, [{
	    key: "set",
	    value: function set(other) {
	      if (other instanceof Vector3) {
	        this._x = other.x;
	        this._y = other.y;
	        this._z = other.z;
	      } else if (other instanceof Array) {
	        this._x = other[0];
	        this._y = other[1];
	        this._z = other[2];
	      }
	    }

	    // X
	  }, {
	    key: "plus",
	    value: function plus(other) {
	      this._x += other.x;
	      this._y += other.y;
	      this._z += other.z;

	      return this;
	    }
	  }, {
	    key: "minus",
	    value: function minus(other) {
	      this._x -= other.x;
	      this._y -= other.y;
	      this._z -= other.z;

	      return this;
	    }
	  }, {
	    key: "multiply",
	    value: function multiply(other) {
	      this._x *= other.x;
	      this._y *= other.y;
	      this._z *= other.z;

	      return this;
	    }
	  }, {
	    key: "dot",
	    value: function dot(other) {
	      return this._x * other.x + this._y * other.y + this._z * other.z;
	    }
	  }, {
	    key: "cross",
	    value: function cross(other) {
	      this._x = this._y * other.z - this._z * other.y;
	      this._y = this._z * other.x - this._x * other.z;
	      this._z = this._x * other.y - this._y * other.x;

	      return this;
	    }
	  }, {
	    key: "length",
	    value: function length() {
	      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z);
	    }
	  }, {
	    key: "lengthSQ",
	    value: function lengthSQ() {
	      return this._x * this._x + this._y + this._y + this._z * this._z;
	    }
	  }, {
	    key: "getDistanceFrom",
	    value: function getDistanceFrom(other) {
	      var x = this._x - other.x;
	      var y = this._y - other.y;
	      var z = this._z - other.z;

	      return Math.sqrt(x * x + y * y + z * z);
	    }
	  }, {
	    key: "getDistanceFromSQ",
	    value: function getDistanceFromSQ(other) {
	      var x = this._x - other.x;
	      var y = this._y - other.y;
	      var z = this._z - other.z;

	      return x * x + y * y + z * z;
	    }
	  }, {
	    key: "normalize",
	    value: function normalize() {
	      var length = this._x * this._x + this._y * this._y + this._z * this._z;
	      if (length === 0) {
	        return this;
	      }

	      length = 1.0 / Math.sqrt(length);

	      this._x *= length;
	      this._y *= length;
	      this._z *= length;

	      return this;
	    }
	  }, {
	    key: "x",
	    get: function get() {
	      return this._x;
	    },
	    set: function set(x) {
	      this._x = x;
	    }

	    // Y
	  }, {
	    key: "y",
	    get: function get() {
	      return this._y;
	    },
	    set: function set(y) {
	      this._y = y;
	    }

	    // Z
	  }, {
	    key: "z",
	    get: function get() {
	      return this._z;
	    },
	    set: function set(z) {
	      this._z = z;
	    }
	  }]);

	  return Vector3;
	})();

	exports["default"] = Vector3;

	var Vector2 = (function () {
	  function Vector2(other) {
	    _classCallCheck(this, Vector2);

	    this._x = 0.0;
	    this._y = 0.0;

	    if (other) {
	      this.set(other);
	    }
	  }

	  _createClass(Vector2, [{
	    key: "set",
	    value: function set(other) {
	      this._x = other.x;
	      this._y = other.y;
	    }

	    // X
	  }, {
	    key: "plus",
	    value: function plus(other) {
	      this._x += other.x;
	      this._y += other.y;

	      return this;
	    }
	  }, {
	    key: "minus",
	    value: function minus(other) {
	      this._x -= other.x;
	      this._y -= other.y;

	      return this;
	    }
	  }, {
	    key: "multiply",
	    value: function multiply(other) {
	      this._x *= other.x;
	      this._y *= other.y;

	      return this;
	    }
	  }, {
	    key: "x",
	    get: function get() {
	      return this._x;
	    },
	    set: function set(x) {
	      this._x = x;
	    }

	    // Y
	  }, {
	    key: "y",
	    get: function get() {
	      return this._y;
	    },
	    set: function set(y) {
	      this._y = y;
	    }
	  }]);

	  return Vector2;
	})();

	exports.Vector2 = Vector2;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsErrors = __webpack_require__(3);

	var Core = (function () {
		function Core() {
			_classCallCheck(this, Core);
		}

		_createClass(Core, null, [{
			key: 'Clamp',
			value: function Clamp(value, low, high) {
				return Math.min(Math.max(value, low), high);
			}
		}, {
			key: 'RadToDeg',
			value: function RadToDeg() {
				return 180.0 / Math.PI;
			}
		}, {
			key: 'DegToRad',
			value: function DegToRad() {
				return Math.PI / 180.0;
			}
		}]);

		return Core;
	})();

	exports['default'] = Core;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsErrors = __webpack_require__(3);

	var _Renderer = __webpack_require__(2);

	var _Renderer2 = _interopRequireDefault(_Renderer);

	var Scene = (function () {
	  function Scene(renderer, options) {
	    _classCallCheck(this, Scene);

	    if (!renderer || !(renderer instanceof _Renderer2['default'])) {
	      throw new _utilsErrors.PompeiError('Bad parameters for Scene(renderer, [options])');
	    }
	    options = options || {};

	    this._renderer = renderer;
	  }

	  _createClass(Scene, [{
	    key: 'renderer',
	    get: function get() {
	      return this._renderer;
	    }
	  }]);

	  return Scene;
	})();

	exports['default'] = Scene;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsErrors = __webpack_require__(3);

	var _VertexBuffer = __webpack_require__(9);

	var _VertexBuffer2 = _interopRequireDefault(_VertexBuffer);

	var Mesh = (function () {
	  /**
	   * @constructor
	   * @param {object} geometry.
	   * @param {object} options
	   */

	  function Mesh(vertexBuffers) {
	    _classCallCheck(this, Mesh);

	    if (!Array.isArray(vertexBuffers)) {
	      throw new _utilsErrors.PompeiError('Bad argument: vertexBuffers must be an array. constructor(vertexBuffers)');
	    }

	    this._vertexBuffers = vertexBuffers;
	  }

	  _createClass(Mesh, [{
	    key: 'addVertexBuffer',
	    value: function addVertexBuffer(vertexBuffer) {
	      if (!(vertexBuffer instanceof _VertexBuffer2['default'])) {
	        throw new _utilsErrors.PompeiError('Bad argument: vertexBuffer must be an instance of VertexBuffer. addVertexBuffer (vertexBuffer)');
	      }

	      this._vertexBuffers.push(vertexBuffer);
	    }
	  }, {
	    key: 'removeVertexBuffer',
	    value: function removeVertexBuffer(vertexBuffer) {
	      var indice = this._vertexBuffers.indexOf(vertexBuffer);

	      if (indice !== -1) {
	        this._vertexBuffers.splice(indice, 1);
	        return true;
	      }

	      return false;
	    }
	  }, {
	    key: 'vertexBuffers',
	    get: function get() {
	      return this._vertexBuffers;
	    }
	  }]);

	  return Mesh;
	})();

	exports['default'] = Mesh;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsErrors = __webpack_require__(3);

	var _Vertex = __webpack_require__(10);

	var _Vertex2 = _interopRequireDefault(_Vertex);

	var VertexBuffer = (function () {
	  function VertexBuffer(vertices, indices) {
	    _classCallCheck(this, VertexBuffer);

	    this._positions = [];
	    this._normals = [];
	    this._uvs = [];
	    this._indices = [];

	    if (vertices && Array.isArray(vertices)) {
	      this.merge(vertices);
	    }
	  }

	  _createClass(VertexBuffer, [{
	    key: 'merge',
	    value: function merge(vertices) {
	      // Fill positions, normals and UVs from vertices of type Vertex
	      for (var i = 0; i < vertices.length; i++) {
	        this._positions.push(vertices[i].position.x);
	        this._positions.push(vertices[i].position.y);
	        this._positions.push(vertices[i].position.z);

	        if (vertices[i].normal) {
	          this._positions.push(vertices[i].normal.x);
	          this._positions.push(vertices[i].normal.y);
	          this._positions.push(vertices[i].normal.z);
	        }

	        if (vertices[i].uv) {
	          this._uvs.push(vertices[i].uvs.x);
	          this._uvs.push(vertices[i].uvs.y);
	        }
	      }
	    }
	  }, {
	    key: 'addVertex',
	    value: function addVertex(vertex) {
	      if (!(vertex instanceof _Vertex2['default'])) {
	        throw new _utilsErrors.PompeiError('Bad parameter: vertex is not a Vertex. addVertex (vertex)');
	      }

	      // Just merge
	      this.merge([vertex]);

	      return this;
	    }
	  }, {
	    key: 'vertices',
	    set: function set(vertices) {
	      if (!Array.isArray(vertices)) {
	        throw new _utilsErrors.PompeiError('Bad parameter: vertices is not an array. set vertices (verticies[])');
	      }

	      // Reset values
	      this._positions = [];
	      this._normals = [];
	      this._uvs = [];

	      // Merge
	      this.merge(vertices);
	    }

	    // Indices
	  }, {
	    key: 'indices',
	    get: function get() {
	      return this._indices;
	    },
	    set: function set(indices) {
	      if (!Array.isArray(indices)) {
	        throw new _utilsErrors.PompeiError('Bad parameter: indices is not an array. set indices (indices)');
	      }

	      this._indices = indices;
	    }

	    // Positions
	  }, {
	    key: 'positions',
	    get: function get() {
	      return this._positions;
	    }

	    // Normals
	  }, {
	    key: 'normals',
	    get: function get() {
	      return this._normals;
	    }
	  }]);

	  return VertexBuffer;
	})();

	exports['default'] = VertexBuffer;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsErrors = __webpack_require__(3);

	var _Vector = __webpack_require__(5);

	var _Vector2 = _interopRequireDefault(_Vector);

	var _Vector3 = _interopRequireDefault(_Vector);

	var Vertex = (function () {
	  function Vertex(position, normal, uv) {
	    _classCallCheck(this, Vertex);

	    if (!(position instanceof _Vector2['default'])) {
	      throw new _utilsErrors.PompeiError('Bad Parameter: position is not a Vector3. constructor(position, normal, uv)');
	    }

	    if (!(normal instanceof _Vector2['default'])) {
	      throw new _utilsErrors.PompeiError('Bad Parameter: normal is not a Vector3. constructor(position, normal, uv)');
	    }

	    if (!(uv instanceof _Vector3['default'])) {
	      throw new _utilsErrors.PompeiError('Bad Parameter: uv is not a Vector2. constructor(position, normal, uv)');
	    }

	    this._position = position;
	    this._normal = normal;
	    this._uv = uv;
	  }

	  // Position

	  _createClass(Vertex, [{
	    key: 'position',
	    get: function get() {
	      return this._position;
	    },
	    set: function set(position) {
	      if (!(position instanceof _Vector2['default'])) {
	        throw new _utilsErrors.PompeiError('Bad Parameter: position is not a Vector3. set position (position)');
	      }

	      this._position = Position;
	    }

	    // Normal
	  }, {
	    key: 'normal',
	    get: function get() {
	      return this._normal;
	    },
	    set: function set(normal) {
	      if (!(normal instanceof _Vector2['default'])) {
	        throw new _utilsErrors.PompeiError('Bad Parameter: normal is not a Vector3. set normal (normal)');
	      }

	      this._normal = normal;
	    }

	    // UV
	  }, {
	    key: 'uv',
	    get: function get() {
	      return this._uv;
	    },
	    set: function set(uv) {
	      if (!(uv instanceof _Vector3['default'])) {
	        throw new _utilsErrors.PompeiError('Bad Parameter: uv is not a Vector2. set uv (uv)');
	      }

	      this._uv = uv;
	    }
	  }]);

	  return Vertex;
	})();

	exports['default'] = Vertex;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;