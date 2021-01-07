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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const merge = __webpack_require__(19);

const webpack = __webpack_require__(12);

const webpackCommon = __webpack_require__(20);

const clientConfig = merge.smart(webpackCommon.clientConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [{
      test: /\.s(a|c)ss$/,
      loader: ['style-loader', 'css-loader', 'postcss-loader', {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    }]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist/public',
    hot: true
  }
});
const serverConfig = merge.smart(webpackCommon.serverConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [{
      test: /\.s(a|c)ss$/,
      loader: ['null-loader']
    }, {
      test: /\.css$/,
      loader: ['null-loader']
    }]
  }
});
module.exports = [clientConfig, serverConfig];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("webpack-merge");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(7);

const nodeExternals = __webpack_require__(21);

const HtmlWebpackPlugin = __webpack_require__(22);

const CopyWebpackPlugin = __webpack_require__(23);

const clientConfig = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    publicPath: '/static',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [["@babel/preset-env", {
            "targets": {
              "browsers": [">0.25%", "not ie 11", "not op_mini all"]
            },
            "useBuiltIns": "usage",
            "corejs": 3
          }], "@babel/preset-react"],
          plugins: [["@babel/plugin-proposal-class-properties"]]
        }
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
  },
  plugins: [new CopyWebpackPlugin([{
    from: 'src/assets/img',
    to: 'img'
  }]), new HtmlWebpackPlugin({
    title: 'TopLanche - Um lanche delicioso em minutos',
    template: './src/index.html'
  })]
};
const serverConfig = {
  entry: './src/server.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          "presets": ["@babel/preset-react"],
          plugins: [["@babel/plugin-proposal-class-properties"]]
        }
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
  },
  plugins: []
};
module.exports = {
  clientConfig,
  serverConfig
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("html-webpack-plugin");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("copy-webpack-plugin");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "express"
var external_express_ = __webpack_require__(8);
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_);

// EXTERNAL MODULE: ./node_modules/path-browserify/index.js
var path_browserify = __webpack_require__(7);
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);

// EXTERNAL MODULE: external "webpack"
var external_webpack_ = __webpack_require__(12);

// EXTERNAL MODULE: external "webpack-dev-middleware"
var external_webpack_dev_middleware_ = __webpack_require__(16);

// EXTERNAL MODULE: external "webpack-hot-middleware"
var external_webpack_hot_middleware_ = __webpack_require__(17);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(13);
var server_default = /*#__PURE__*/__webpack_require__.n(server_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(2);

// EXTERNAL MODULE: external "serialize-javascript"
var external_serialize_javascript_ = __webpack_require__(14);
var external_serialize_javascript_default = /*#__PURE__*/__webpack_require__.n(external_serialize_javascript_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(1);

// EXTERNAL MODULE: ./webpack.dev.js
var webpack_dev = __webpack_require__(18);

// EXTERNAL MODULE: external "react-router"
var external_react_router_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/CartIcon.jsx




class CartIcon_CartIcon extends external_react_default.a.Component {
  render() {
    let cartLink = "";
    let itemsCount = this.props.cart.reduce((acc, item) => acc + item.qty, 0);
    return /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Link"], {
      to: "/cart",
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "cartIcon"
    }, /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      "aria-hidden": "true"
    }), itemsCount > 0 && /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "cartBadge"
    }, itemsCount)));
  }

}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

/* harmony default export */ var components_CartIcon = (Object(external_react_redux_["connect"])(mapStateToProps)(CartIcon_CartIcon));
// CONCATENATED MODULE: ./src/components/Logo.jsx



class Logo_Logo extends external_react_default.a.Component {
  render() {
    return /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Link"], {
      to: "/",
      className: "logo_link"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "logo"
    }, /*#__PURE__*/external_react_default.a.createElement("span", {
      className: "logo_part1"
    }, "Top"), /*#__PURE__*/external_react_default.a.createElement("span", {
      className: "logo_part2"
    }, "Lanches")));
  }

}

/* harmony default export */ var components_Logo = (Logo_Logo);
// CONCATENATED MODULE: ./src/components/Header.jsx




class Header_Header extends external_react_default.a.Component {
  render() {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "header_shadow"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "container"
    }, /*#__PURE__*/external_react_default.a.createElement("header", null, /*#__PURE__*/external_react_default.a.createElement(components_Logo, null), /*#__PURE__*/external_react_default.a.createElement(components_CartIcon, null))));
  }

}

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./src/config/index.js
const prodApiBaseUrl = 'http://191.252.201.155:2000/';
const devApiBaseUrl = 'http://localhost:2000/';
const config = {
  apiBaseUrl:  true ? prodApiBaseUrl : undefined
};
/* harmony default export */ var src_config = (config);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/constants/actionTypes.js
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
const SET_CUSTOMER = 'SET_CUSTOMER';
const SET_CART = 'SET_CART';
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
const CHECKOUT_START = 'CHECKOUT_START';
const CHECKOUT_END = 'CHECKOUT_END';
// EXTERNAL MODULE: external "history"
var external_history_ = __webpack_require__(9);

// CONCATENATED MODULE: ./src/helpers/history.js

let createHistory = null;

if (typeof window !== 'undefined') {
  createHistory = external_history_["createBrowserHistory"];
} else {
  createHistory = external_history_["createMemoryHistory"];
}

/* harmony default export */ var helpers_history = (createHistory());
// CONCATENATED MODULE: ./src/actions/customer.js





const setCustomer = customer => ({
  type: SET_CUSTOMER,
  customer
});

const setCart = cart => ({
  type: SET_CART,
  cart
});

const checkoutStart = () => ({
  type: CHECKOUT_START
});

const checkoutEnd = () => ({
  type: CHECKOUT_END
});

const addCartItem = productId => {
  return async (dispatch, getState) => {
    const {
      customer,
      cart
    } = getState();
    const filteredCart = cart.filter(item => item.product_id === productId);
    let cartItem = null;

    if (filteredCart.length > 0) {
      [cartItem] = filteredCart;
    }

    if (cartItem) {
      cartItem.qty += 1;
    } else {
      cartItem = {
        product_id: productId,
        qty: 1
      };
    }

    const auth = {
      headers: {
        Authorization: `bearer ${customer.token}`
      }
    };
    const updateCartResponse = await external_axios_default.a.post(`${src_config.apiBaseUrl}api/v1/customer/${customer.customer_id}/cart/updateItem`, cartItem, auth);

    if (updateCartResponse.status === 200) {
      const newCart = updateCartResponse.data;
      dispatch(setCart(newCart));
    } else {
      console.log(`updateCartItem error. Status = ${updateCartResponse.status}`);
    }
  };
};

const updateCartItem = (productId, qty) => {
  return async (dispatch, getState) => {
    const {
      customer
    } = getState();
    const auth = {
      headers: {
        Authorization: `bearer ${customer.token}`
      }
    };
    const cartItem = {
      product_id: productId,
      qty
    };
    const updateCartResponse = await external_axios_default.a.post(`${src_config.apiBaseUrl}api/v1/customer/${customer.customer_id}/cart/updateItem`, cartItem, auth);

    if (updateCartResponse.status === 200) {
      const newCart = updateCartResponse.data;
      dispatch(setCart(newCart));
    } else {
      console.log(`updateCartItem error. Status = ${updateCartResponse.status}`);
    }
  };
};

const checkout = checkoutInfo => {
  return async (dispatch, getState) => {
    const {
      customer
    } = getState();
    dispatch(checkoutStart());
    const auth = {
      headers: {
        Authorization: `bearer ${customer.token}`
      }
    };
    const checkoutResponse = await external_axios_default.a.post(`${src_config.apiBaseUrl}api/v1/customer/${customer.customer_id}/cart/checkout`, checkoutInfo, auth);

    if (checkoutResponse.status === 200) {
      dispatch(checkoutEnd());
      helpers_history.push('/thankYou');
    } else {
      console.log(`checkout error. Status = ${checkoutResponse.status}`);
    }
  };
};

/* harmony default export */ var actions_customer = ({
  setCustomer,
  setCart,
  updateCartItem,
  addCartItem,
  checkout
});
// CONCATENATED MODULE: ./src/components/Product.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Product_Product extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "buy", () => {
      this.props.addCartItem(this.props.productId);
    });
  }

  render() {
    let imageUrl = src_config.apiBaseUrl + 'files/' + this.props.image.id + '/' + this.props.image.filename;
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "product"
    }, /*#__PURE__*/external_react_default.a.createElement("img", {
      src: imageUrl
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "bottom"
    }, /*#__PURE__*/external_react_default.a.createElement("h1", null, this.props.title), /*#__PURE__*/external_react_default.a.createElement("h2", null, this.props.description), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "price"
    }, "R$", this.props.price), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "button",
      onClick: this.buy
    }, /*#__PURE__*/external_react_default.a.createElement("i", {
      className: "fa fa-plus",
      "aria-hidden": "true"
    }))));
  }

}

const mapDispatchToProps = {
  addCartItem: actions_customer.addCartItem
};
/* harmony default export */ var components_Product = (Object(external_react_redux_["connect"])(null, mapDispatchToProps)(Product_Product));
// CONCATENATED MODULE: ./src/components/Products.jsx




class Products_Products extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "container"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "products"
    }, this.props.products.map(item => /*#__PURE__*/external_react_default.a.createElement(components_Product, {
      key: item._id,
      productId: item._id,
      image: item.image,
      title: item.title,
      description: item.description,
      price: item.price
    }))));
  }

}

function Products_mapStateToProps(state) {
  return {
    products: state.products
  };
}

/* harmony default export */ var components_Products = (Object(external_react_redux_["connect"])(Products_mapStateToProps)(Products_Products));
// CONCATENATED MODULE: ./src/components/Footer.jsx



class Footer_Header extends external_react_default.a.Component {
  render() {
    return /*#__PURE__*/external_react_default.a.createElement("footer", null, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "container"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "footer_inside"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "copyright"
    }, /*#__PURE__*/external_react_default.a.createElement(components_Logo, null), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "year"
    }, "\xA9 2021")), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "contacts"
    }, /*#__PURE__*/external_react_default.a.createElement("p", null, "Top Lanches da Vila"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Rua Melo, 999 - Vila Barros"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Guarulhos / SP"), /*#__PURE__*/external_react_default.a.createElement("p", null, "+55 11 98999-9999"), /*#__PURE__*/external_react_default.a.createElement("p", null, "contato@toplanches.com.br")))));
  }

}

/* harmony default export */ var Footer = (Footer_Header);
// CONCATENATED MODULE: ./src/components/CartEmpty.jsx



class CartEmpty_CartEmpty extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "emptyCartContainer"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "emptyCart"
    }, /*#__PURE__*/external_react_default.a.createElement("img", {
      className: "emptyCartImg",
      src: "/static/img/shopping-cart.svg"
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "emptyCartText"
    }, "SEU CARRINHO EST\xC1 VAZIO"), /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Link"], {
      to: "/"
    }, /*#__PURE__*/external_react_default.a.createElement("button", {
      className: "blueButton"
    }, "Voltar ao Card\xE1pio"))));
  }

}

/* harmony default export */ var components_CartEmpty = (CartEmpty_CartEmpty);
// CONCATENATED MODULE: ./src/helpers/displayCurrency.js
function displayCurrency(value) {
  const floatValue = parseFloat(value);
  return floatValue.toFixed(2);
}

/* harmony default export */ var helpers_displayCurrency = (displayCurrency);
// CONCATENATED MODULE: ./src/components/CartTable.jsx
function CartTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class CartTable_CartTable extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    CartTable_defineProperty(this, "handleDelete", product_id => {
      console.log('Apagando ' + product_id);
      this.props.updateCartItem(product_id, 0);
    });
  }

  render() {
    let cartTotal = this.props.cart.reduce((acc, item) => {
      let {
        totalPrice,
        totalQty
      } = acc;
      console.log('acc');
      console.log(acc);
      let price = parseFloat(item.price);
      totalPrice += price * item.qty;
      totalQty += item.qty;
      return {
        totalPrice,
        totalQty
      };
    }, {
      totalPrice: 0,
      totalQty: 0
    });
    console.log(cartTotal);
    return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, this.props.cart.map(item => {
      let imageUrl = src_config.apiBaseUrl + 'files/' + item.image.id + '/' + item.image.filename;
      let price = parseFloat(item.price);
      let total = price * item.qty;
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "cart-prod"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "cart-prod-img-cont"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        className: "cart-prod-img",
        src: imageUrl
      })), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "cart-prod-det"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "cart-prod-head"
      }, item.title), /*#__PURE__*/external_react_default.a.createElement("p", {
        className: "cart-prod-desc"
      }, item.description)), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "cart-prod-prc"
      }, "R$", helpers_displayCurrency(price)), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "cart-prod-mul"
      }, "x"), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "cart-prod-qty"
      }, /*#__PURE__*/external_react_default.a.createElement("input", {
        type: "text",
        value: item.qty
      })), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "cart-prod-removal"
      }, !this.props.disableDelete && /*#__PURE__*/external_react_default.a.createElement("button", {
        className: "remove-cart-prod",
        onClick: () => {
          this.handleDelete(item.product_id);
        }
      }, "Remover")), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "cart-prod-prc-spacer"
      }), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "cart-prod-line-prc"
      }, "R$", helpers_displayCurrency(total)));
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "cart-prod"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "cart-total"
    }, "TOTAL"), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "cart-prod-line-prc"
    }, "R$", helpers_displayCurrency(cartTotal.totalPrice))));
  }

}

function CartTable_mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const CartTable_mapDispatchToProps = {
  updateCartItem: actions_customer.updateCartItem
};
/* harmony default export */ var components_CartTable = (Object(external_react_redux_["connect"])(CartTable_mapStateToProps, CartTable_mapDispatchToProps)(CartTable_CartTable));
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(10);

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5);

// CONCATENATED MODULE: ./src/components/CartForm.jsx
function CartForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class CartForm_Cart extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    CartForm_defineProperty(this, "phoneRegExp", /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/);

    CartForm_defineProperty(this, "validationSchema", external_yup_["object"]().shape({
      name: external_yup_["string"]().required('Obrigatório'),
      phone: external_yup_["string"]().required('Obrigatório').matches(this.phoneRegExp, 'Número de telefone inválido'),
      address: external_yup_["string"]().required('Obrigatório')
    }));

    CartForm_defineProperty(this, "handleCompleteOrder", values => {
      this.props.checkout(values);
    });
  }

  render() {
    return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "cartTitle"
    }, "Forma de Pagamento"), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "cartFormContainer"
    }, /*#__PURE__*/external_react_default.a.createElement(external_formik_["Formik"], {
      initialValues: {
        name: '',
        phone: '',
        address: '',
        comment: ''
      },
      validationSchema: this.validationSchema,
      onSubmit: this.handleCompleteOrder
    }, ({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit
    }) => /*#__PURE__*/external_react_default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/external_react_default.a.createElement("label", null, "Como devemos cham\xE1-lo?"), /*#__PURE__*/external_react_default.a.createElement("input", {
      name: "name",
      type: "text",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.name
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "errors"
    }, touched.name && errors.name)), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/external_react_default.a.createElement("label", null, "Seu n\xFAmero do whatsapp"), /*#__PURE__*/external_react_default.a.createElement("input", {
      name: "phone",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.phone
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "errors"
    }, touched.phone && errors.phone)), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/external_react_default.a.createElement("label", null, "Seu endere\xE7o de entrega"), /*#__PURE__*/external_react_default.a.createElement("textarea", {
      name: "address",
      rows: 3,
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.address
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "errors"
    }, touched.address && errors.address)), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/external_react_default.a.createElement("label", null, "Se voc\xEA quiser deixar um coment\xE1rio para n\xF3s, use o espa\xE7o abaixo"), /*#__PURE__*/external_react_default.a.createElement("textarea", {
      name: "comment",
      rows: 3,
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.comment
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "errors"
    }, touched.comment && errors.comment)), "0"))), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "cartTitle"
    }, "Informa\xE7\xF5es Pessoais"), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "cartFormContainer"
    }, /*#__PURE__*/external_react_default.a.createElement(external_formik_["Formik"], {
      initialValues: {
        name: '',
        phone: '',
        address: '',
        comment: ''
      },
      validationSchema: this.validationSchema,
      onSubmit: this.handleCompleteOrder
    }, ({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit
    }) => /*#__PURE__*/external_react_default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/external_react_default.a.createElement("label", null, "Como devemos cham\xE1-lo?"), /*#__PURE__*/external_react_default.a.createElement("input", {
      name: "name",
      type: "text",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.name
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "errors"
    }, touched.name && errors.name)), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/external_react_default.a.createElement("label", null, "Seu n\xFAmero do whatsapp"), /*#__PURE__*/external_react_default.a.createElement("input", {
      name: "phone",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.phone
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "errors"
    }, touched.phone && errors.phone)), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/external_react_default.a.createElement("label", null, "Seu endere\xE7o de entrega"), /*#__PURE__*/external_react_default.a.createElement("textarea", {
      name: "address",
      rows: 3,
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.address
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "errors"
    }, touched.address && errors.address)), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/external_react_default.a.createElement("label", null, "Se voc\xEA quiser deixar um coment\xE1rio para n\xF3s, use o espa\xE7o abaixo"), /*#__PURE__*/external_react_default.a.createElement("textarea", {
      name: "comment",
      rows: 3,
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.comment
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "errors"
    }, touched.comment && errors.comment)), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "completeOrderButtonContainer"
    }, /*#__PURE__*/external_react_default.a.createElement("button", {
      className: "blueButton",
      type: "submit",
      disabled: this.props.isSubmitting
    }, "Enviar Pedido ", this.props.isSubmitting && /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "spinner"
    })))))));
  }

}

function CartForm_mapStateToProps(state) {
  return {
    isSubmitting: state.checkout.isSubmitting
  };
}

const CartForm_mapDispatchToProps = {
  checkout: actions_customer.checkout
};
/* harmony default export */ var CartForm = (Object(external_react_redux_["connect"])(CartForm_mapStateToProps, CartForm_mapDispatchToProps)(CartForm_Cart));
// CONCATENATED MODULE: ./src/components/Cart.jsx
function Cart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Cart_Cart extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Cart_defineProperty(this, "state", {
      checkout: false
    });

    Cart_defineProperty(this, "handleCheckout", () => {
      this.setState({ ...this.state,
        checkout: true
      });
    });

    Cart_defineProperty(this, "handleCancel", () => {
      this.setState({ ...this.state,
        checkout: false
      });
    });
  }

  render() {
    return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("img", {
      className: "emptyCartImg",
      src: "/static/img/shopping-cart.svg"
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "cartTitle"
    }, "Seu pedido"), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "cartContainer"
    }, /*#__PURE__*/external_react_default.a.createElement(components_CartTable, {
      disableDelete: this.state.checkout
    }), !this.state.checkout && /*#__PURE__*/external_react_default.a.createElement("button", {
      className: "blueButton checkoutButton",
      onClick: this.handleCheckout
    }, "Pedir")), this.state.checkout && /*#__PURE__*/external_react_default.a.createElement(CartForm, {
      onCancel: this.handleCancel
    }));
  }

}

function Cart_mapStateToProps(state) {
  return {
    products: state.products
  };
}

/* harmony default export */ var components_Cart = (Object(external_react_redux_["connect"])(Cart_mapStateToProps)(Cart_Cart));
// CONCATENATED MODULE: ./src/components/CartPage.jsx





class CartPage_CartPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cartEmpty = this.props.cart.length === 0;
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "container"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "cartCenter"
    }, cartEmpty ? /*#__PURE__*/external_react_default.a.createElement(components_CartEmpty, null) : /*#__PURE__*/external_react_default.a.createElement(components_Cart, null)));
  }

}

function CartPage_mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

/* harmony default export */ var components_CartPage = (Object(external_react_redux_["connect"])(CartPage_mapStateToProps)(CartPage_CartPage));
// CONCATENATED MODULE: ./src/components/CartThankYou.jsx



class CartThankYou_CartThankYou extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "container"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "cartCenter"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "emptyCartContainer"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "emptyCart"
    }, /*#__PURE__*/external_react_default.a.createElement("img", {
      className: "emptyCartImg",
      src: "/static/img/shopping-cart.svg"
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "emptyCartText"
    }, "Obrigado pelo seu pedido!"), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "emptyCartText"
    }, "N\xF3s entraremos em contato em brave."), /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Link"], {
      to: "/"
    }, /*#__PURE__*/external_react_default.a.createElement("button", {
      className: "blueButton"
    }, "Voltar ao card\xE1pio"))))));
  }

}

/* harmony default export */ var components_CartThankYou = (CartThankYou_CartThankYou);
// CONCATENATED MODULE: ./src/helpers/ScrollToTop.jsx



class ScrollToTop_ScrollToTop extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    console.log('!!componentDidUpdate');
    console.log(this.props);
    console.log(prevProps);

    if (this.props.location !== prevProps.location) {
      console.log('change location');

      if (typeof window != 'undefined') {
        console.log('scroll top');
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    return this.props.children;
  }

}

/* harmony default export */ var helpers_ScrollToTop = (Object(external_react_router_["withRouter"])(ScrollToTop_ScrollToTop));
// CONCATENATED MODULE: ./src/components/App.jsx









class App_App extends external_react_["Component"] {
  render() {
    return /*#__PURE__*/external_react_default.a.createElement(helpers_ScrollToTop, null, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "root"
    }, /*#__PURE__*/external_react_default.a.createElement(components_Header, null), /*#__PURE__*/external_react_default.a.createElement(external_react_router_["Switch"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_router_["Route"], {
      path: "/cart",
      component: components_CartPage
    }), /*#__PURE__*/external_react_default.a.createElement(external_react_router_["Route"], {
      path: "/thankYou",
      component: components_CartThankYou
    }), /*#__PURE__*/external_react_default.a.createElement(external_react_router_["Route"], {
      path: "/",
      component: components_Products
    })), /*#__PURE__*/external_react_default.a.createElement(Footer, null)));
  }

}

/* harmony default export */ var components_App = (App_App);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(11);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./src/reducers/index.js

const reducers_initialState = {
  products: [],
  customer: null,
  cart: []
};
/* harmony default export */ var reducers = ((state = reducers_initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      console.log(JSON.stringify(action));
      return { ...state,
        products: action.products
      };

    case SET_CUSTOMER:
      return { ...state,
        customer: action.customer
      };

    case SET_CART:
      return { ...state,
        cart: action.cart
      };

    case CHECKOUT_START:
      return { ...state,
        checkout: {
          isSubmitting: true
        }
      };

    case CHECKOUT_END:
      return { ...state,
        checkout: {
          isSubmitting: false
        },
        cart: []
      };

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/middlewares/customerTokenMiddleware.js


const customerTokenMiddleware = () => next => action => {
  if (action.type === SET_CUSTOMER) {
    window.localStorage.setItem('customerId', action.customer.customer_id);
    window.localStorage.setItem('customerToken', action.customer.token);
  }

  next(action);
};

/* harmony default export */ var middlewares_customerTokenMiddleware = (customerTokenMiddleware);
// CONCATENATED MODULE: ./src/store/configureStore.js




const configureServerStore = initialState => {
  const middleware = [external_redux_thunk_default.a];
  return Object(external_redux_["createStore"])(reducers, initialState, Object(external_redux_["applyMiddleware"])(...middleware));
};
const configureClientStore = initialState => {
  const middleware = [external_redux_thunk_default.a, middlewares_customerTokenMiddleware];
  return Object(external_redux_["createStore"])(reducers, initialState, Object(external_redux_["applyMiddleware"])(...middleware));
};
// CONCATENATED MODULE: ./src/actions/products.js




const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

const loadProducts = () => {
  return async dispatch => {
    const productsResponse = await external_axios_default.a.get(`${src_config.apiBaseUrl}api/v1/products`);

    if (productsResponse.status === 200) {
      const products = productsResponse.data;
      console.log(products);
      dispatch(receiveProducts(products));
    }
  };
};

/* harmony default export */ var actions_products = ({
  loadProducts
});
// CONCATENATED MODULE: ./src/ssrRoutes.js

const SsrRoutes = [{
  path: '/',
  action: actions_products.loadProducts
}, {
  path: '/product'
}, {
  path: '/cart'
}, {}];
/* harmony default export */ var ssrRoutes = (SsrRoutes);
// CONCATENATED MODULE: ./src/server.jsx














const app = external_express_default()();

if (false) {} else {
  console.log('Start Production server');
  app.use('/static', external_express_default.a.static(path_browserify_default.a.resolve(__dirname, 'public')));
}

const renderPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>TopLanche - Um lanche delicioso em minutos</title>
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="/static/main.css">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${external_serialize_javascript_default()(initialState)}; 
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
};

app.get('/*', function (req, res) {
  const currentRoute = ssrRoutes.find(route => Object(external_react_router_dom_["matchPath"])(req.url, route)) || {};

  if (currentRoute.action) {
    const store = configureServerStore();
    const loadDataAction = currentRoute.action;
    store.dispatch(loadDataAction()).then(() => {
      const componentHtml = server_default.a.renderToString( /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["StaticRouter"], {
        location: req.url,
        context: {}
      }, /*#__PURE__*/external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: store
      }, /*#__PURE__*/external_react_default.a.createElement(components_App, null))));
      const initialState = store.getState();
      const html = renderPage(componentHtml, initialState);
      res.send(html);
    });
    return;
  }

  let html = renderPage('', '');
  res.send(html);
});
const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map