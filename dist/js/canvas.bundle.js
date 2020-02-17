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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var canvas = document.querySelector('#canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']; // Event Listeners

addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
}); // Objects

var Ball =
/*#__PURE__*/
function () {
  function Ball(x, y, dy, dyMove, distance, radius, color) {
    _classCallCheck(this, Ball);

    this.x = x;
    this.y = y;
    this.oldX = x;
    this.oldY = y;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.dyMove = dyMove;
    this.dxMove = dyMove * 1.7;
    this.distance = distance;
  }

  _createClass(Ball, [{
    key: "draw",
    value: function draw() {
      // c.scale(1, 0.5);
      c.beginPath();
      c.ellipse(this.x, this.y, 1, this.radius, Math.PI, 0, Math.PI * 2);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      // if(this.y + this.radius > canvas.height) {
      //   this.dy = -this.dy * 0.93;
      // } else {
      //   this.dy += 1;
      // }
      // this.y -= this.dy;
      if (this.y < 0) {
        this.y = canvas.height + this.radius;
      }

      if (mouse.x - this.x < this.distance && mouse.x - this.x > -this.distance && mouse.y - this.y < this.distance && mouse.y - this.y > -this.distance) {
        if (mouse.x - this.x > 0) {
          this.x -= this.dxMove;
        } else if (mouse.x - this.x < 0) {
          this.x += this.dxMove;
        }

        if (mouse.y - this.y < 0) {
          this.y += this.dyMove;
        } else if (mouse.y - this.y > 0) {
          this.y -= this.dyMove;
        }
      } else {
        if (this.x > this.oldX) {
          this.x -= this.dxMove;
        } else if (this.x < this.oldX) {
          this.x += this.dxMove;
        } // if(this.y > this.oldY) {
        //   this.y = -this.dyMove;
        // } else if(this.y < this.oldY) {
        //   this.y = +this.dyMove;
        // }


        this.y -= this.dy;
      }

      this.draw();
    }
  }]);

  return Ball;
}(); // Implementation


var balls;

function init(options) {
  if (!options) {
    options = {};
  }

  var radii = options.radius || [1, 4];
  var dist = options.distance || [60, 90];
  var particleCount = options.particlesCount || 300;
  var color = options.color || 'rgba(255, 255, 255, 0.85)';
  balls = [];

  for (var i = 0; i < particleCount; i++) {
    var radius = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomFloatFromRange(radii[0], radii[1]);
    var x = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(radius, canvas.width - radius); // let y = 100;

    var y = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(0, canvas.height);
    var dy = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomFloatFromRange(10, 90) * 0.01;
    var distance = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomFloatFromRange(dist[0], dist[1]);
    var dyMove = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomFloatFromRange(0.05, 0.15);
    var ball = new Ball(x, y, dy, dyMove, distance, radius, color);
    balls.push(ball);
  }
} // Animation Loop


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height); // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);

  balls.forEach(function (ball) {
    ball.update();
  });
}

init();
animate();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloatFromRange(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomFloatFromRange: randomFloatFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map