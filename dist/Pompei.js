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

	var _Scene = __webpack_require__(4);

	var _Scene2 = _interopRequireDefault(_Scene);

	var _Matrix = __webpack_require__(5);

	var _Matrix2 = _interopRequireDefault(_Matrix);

	var _Mesh = __webpack_require__(6);

	var _Mesh2 = _interopRequireDefault(_Mesh);

	var _Vertex = __webpack_require__(7);

	var _Vertex2 = _interopRequireDefault(_Vertex);

	var _VertexBuffer = __webpack_require__(9);

	var _VertexBuffer2 = _interopRequireDefault(_VertexBuffer);

	var _Vector = __webpack_require__(8);

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

	var _Scene = __webpack_require__(4);

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

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsErrors = __webpack_require__(3);

	var Renderer = function Renderer(context, options) {
	  _classCallCheck(this, Renderer);

	  if (!context) {
	    throw new _utilsErrors.PompeiError('Bad Parameters: constructor(context, options)');
	  }
	  options = options || {};

	  this.onDraw = function onDraw() {};
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsErrors = __webpack_require__(3);

	var Matrix = (function () {
	  function Matrix(array) {
	    _classCallCheck(this, Matrix);

	    if (!array || !array.length || array.length !== 16) {
	      throw new _utilsErrors.PompeiError('Bad parameters for Matrix(array[16])');
	    }

	    this._array = array;
	  }

	  _createClass(Matrix, [{
	    key: 'array',
	    get: function get() {
	      return this._array;
	    }
	  }]);

	  return Matrix;
	})();

	exports['default'] = Matrix;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// import { PompeiError } from './utils/errors';

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _bind = Function.prototype.bind;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _Vertex = __webpack_require__(7);

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
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return this._vertices[this.addVertex(new (_bind.apply(_Vertex2['default'], [null].concat(args)))())];
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
	      if (idx !== -1) {
	        array.splice(idx, 1);
	      }
	    }
	  }]);

	  return Mesh;
	})();

	exports['default'] = Mesh;
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

	var _Vector = __webpack_require__(8);

	var _Vector2 = _interopRequireDefault(_Vector);

	var Vertex = (function () {
	  function Vertex(vector) {
	    _classCallCheck(this, Vertex);

	    if (!(vector instanceof _Vector2['default'])) {
	      throw new PompeiError('Bad Parameters: constructor(vector)');
	    }

	    this._vector = vector;
	  }

	  _createClass(Vertex, [{
	    key: 'vector',
	    get: function get() {
	      return this._vector;
	    }
	  }]);

	  return Vertex;
	})();

	exports['default'] = Vertex;
	module.exports = exports['default'];

/***/ },
/* 8 */
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

/***/ },
/* 9 */
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

	var _Vertex = __webpack_require__(7);

	var _Vertex2 = _interopRequireDefault(_Vertex);

	var VertexBuffer = (function () {
	  function VertexBuffer(vertices, indices) {
	    _classCallCheck(this, VertexBuffer);

	    this.vertices = vertices;
	    this.indices = indices;
	  }

	  _createClass(VertexBuffer, [{
	    key: 'merge',
	    value: function merge() {}

	    // Remove duplicate in Mesh
	  }, {
	    key: 'createVertex',
	    value: function createVertex() {
	      return this.vertices.push(this.addVertex(new (_bind.apply(_Vertex2['default'], [null].concat(_toConsumableArray(args))))()));
	    }
	  }, {
	    key: 'addVertex',
	    value: function addVertex(vertex) {
	      return this.vertices.push(vertex);
	    }
	  }, {
	    key: 'getVertex',
	    value: function getVertex(param) {
	      return this.vertices[param instanceof _Vertex2['default'] ? this.getVertexIndex(param) : param];
	    }
	  }, {
	    key: 'getVertexIndex',
	    value: function getVertexIndex(vertex) {
	      return this.vertices.indexOf(vertex);
	    }
	  }, {
	    key: 'removeVertex',
	    value: function removeVertex(vertex) {
	      this.vertices.splice(this.getVertexIndex(vertex), 1);
	    }
	  }, {
	    key: 'vertices',
	    get: function get() {
	      return this._vertices || [];
	    },
	    set: function set(vertices) {
	      if (Array.isArray(vertices)) {
	        this._vertices = vertices;
	      } else {
	        throw new PompeiError('Bad parameters: set vertices (verticies[])');
	      }
	    }
	  }, {
	    key: 'indices',
	    get: function get() {
	      return this._indices || [];
	    }
	  }]);

	  return VertexBuffer;
	})();

	exports['default'] = VertexBuffer;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;