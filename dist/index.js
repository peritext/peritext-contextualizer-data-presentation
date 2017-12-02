module.exports =
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metadata = __webpack_require__(9);

var _metadata2 = _interopRequireDefault(_metadata);

var _BlockDynamic = __webpack_require__(10);

var _BlockDynamic2 = _interopRequireDefault(_BlockDynamic);

var _BlockStatic = __webpack_require__(13);

var _BlockStatic2 = _interopRequireDefault(_BlockStatic);

var _Player = __webpack_require__(15);

var _Player2 = _interopRequireDefault(_Player);

var _ScrollerLayout = __webpack_require__(16);

var _ScrollerLayout2 = _interopRequireDefault(_ScrollerLayout);

var _StepperLayout = __webpack_require__(17);

var _StepperLayout2 = _interopRequireDefault(_StepperLayout);

var _globals = __webpack_require__(18);

var _globals2 = _interopRequireDefault(_globals);

var _Timeline = __webpack_require__(19);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _SVGViewer = __webpack_require__(20);

var _SVGViewer2 = _interopRequireDefault(_SVGViewer);

var _Network = __webpack_require__(21);

var _Network2 = _interopRequireDefault(_Network);

var _Map = __webpack_require__(22);

var _Map2 = _interopRequireDefault(_Map);

var _leaflet = __webpack_require__(23);

var _leaflet2 = _interopRequireDefault(_leaflet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultCss = [_leaflet2.default, _Player2.default, _ScrollerLayout2.default, _StepperLayout2.default, _globals2.default, _Timeline2.default, _SVGViewer2.default, _Network2.default, _Map2.default].join('\n');

exports.default = {
  metadata: _metadata2.default,
  BlockDynamic: _BlockDynamic2.default,
  BlockStatic: _BlockStatic2.default,
  defaultCss: defaultCss
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  type: 'peritext-contextualizer',
  id: 'bib',
  name: 'Data presentation',
  coverage: {
    inlineStatic: false,
    blockStatic: true,
    inlineDynamic: false,
    blockDynamic: true
  },
  model: {
    acceptedResourceTypes: [{ type: 'data-presentation' }],
    block: {
      expandable: true,
      options: [{
        id: 'displayCommentsInCodex',
        title: {
          fr: 'Afficher les commentaires en mode codex',
          en: 'Display comments in codex mode'
        },
        type: 'boolean'
      }, {
        id: 'displayMode',
        title: {
          fr: 'Mode d\'affichage',
          en: 'Display mode'
        },
        type: 'select',
        values: [{
          id: 'stepper',
          labels: {
            fr: 'Étapes',
            en: 'Steps'
          }
        }, {
          id: 'scroller',
          labels: {
            fr: 'Déroulement',
            en: 'Scroll'
          }
        }]
      }]
    }
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(11);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
var inBrowser = isBrowser();

var QuinoaPresentationPlayer = void 0;
if (inBrowser) {
  QuinoaPresentationPlayer = __webpack_require__(12).default;
}

var BlockDynamic = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(BlockDynamic, _Component);

  function BlockDynamic(props) {
    (0, _classCallCheck3.default)(this, BlockDynamic);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BlockDynamic.__proto__ || (0, _getPrototypeOf2.default)(BlockDynamic)).call(this, props));

    _initialiseProps.call(_this);

    return _this;
  }

  (0, _createClass3.default)(BlockDynamic, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateData(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.data !== nextProps.data || this.getDataset(this.props) !== this.getDataset(nextProps)) {
        this.updateData(nextProps);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$resource = _props.resource,
          resource = _props$resource === undefined ? {} : _props$resource,
          _props$contextualizer = _props.contextualizer,
          contextualizer = _props$contextualizer === undefined ? {} : _props$contextualizer,
          _props$allowInteracti = _props.allowInteractions,
          allowInteractions = _props$allowInteracti === undefined ? true : _props$allowInteracti,
          fixed = _props.fixed,
          onExit = _props.onExit,
          _state = this.state,
          data = _state.data,
          loading = _state.loading,
          _context = this.context,
          dimensions = _context.dimensions,
          _context$datasets = _context.datasets,
          datasets = _context$datasets === undefined ? {} : _context$datasets;


      var onWheel = function onWheel(e) {
        if (fixed) {
          e.stopPropagation();
          e.preventDefault();
        }
      };

      var handleExit = function handleExit(direction) {
        if (typeof onExit === 'function') {
          onExit(direction);
        }
      };
      if (inBrowser) {
        return _react2.default.createElement(
          'figure',
          {
            className: 'peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-data-presentation'
          },
          !loading && _react2.default.createElement(QuinoaPresentationPlayer, {
            presentation: (0, _extends3.default)({}, data, {
              settings: (0, _extends3.default)({}, data.settings, {
                template: contextualizer.displayMode || 'scroller'
              })
            }),
            onWheel: onWheel,
            onExit: handleExit,
            style: {
              position: fixed ? 'fixed' : 'absolute',
              left: fixed ? dimensions.position.left + 5 : undefined,
              top: fixed ? dimensions.position.top + 5 : undefined,
              width: fixed ? dimensions.width - 10 : undefined,
              height: fixed ? dimensions.height - 10 : undefined,
              pointerEvents: allowInteractions ? 'all' : 'none'
            }
          })
        );
      } else return null;
    }
  }]);
  return BlockDynamic;
}(_react.Component), _class.contextTypes = {
  datasets: _propTypes2.default.object,
  /**
   * Dimensions of the wrapping element
   */
  dimensions: _propTypes2.default.object,
  /**
   * Whether the block asset is displayed in a note (and not in main content)
   */
  inNote: _propTypes2.default.bool
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getDataset = function (props) {
    return _this2.context && _this2.context.datasets && _this2.context.datasets[props.resource.data.presentationDataset];
  };

  this.updateData = function (props) {
    var dataset = _this2.getDataset(props);
    if (dataset === undefined) {
      return;
    }
    if (dataset.rawData) {
      _this2.setState({
        loading: false,
        data: dataset.rawData,
        error: undefined
      });
    } else if (dataset.uri) {
      _this2.setState({
        loading: true,
        error: undefined
      });
      (0, _axios.get)(dataset.uri).then(function (response) {
        var data = response.data;
        _this2.setState({
          data: data,
          loading: false
        });
      }).catch(function (error) {
        _this2.setState({
          error: error
        });
      });
    } else {
      _this2.setState({
        error: 'no-dataset'
      });
    }
  };
}, _temp);
exports.default = BlockDynamic;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("quinoa-presentation-player");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMarkdown = __webpack_require__(14);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _axios = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinkRenderer(props) {
  return _react2.default.createElement(
    'a',
    { href: props.href, target: '_blank' },
    props.children
  );
}

var BlockStatic = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(BlockStatic, _Component);

  function BlockStatic(props) {
    (0, _classCallCheck3.default)(this, BlockStatic);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BlockStatic.__proto__ || (0, _getPrototypeOf2.default)(BlockStatic)).call(this, props));

    _initialiseProps.call(_this);

    return _this;
  }

  (0, _createClass3.default)(BlockStatic, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateData(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.data !== nextProps.data || this.getDataset(this.props) !== this.getDataset(nextProps)) {
        this.updateData(nextProps);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$resource = _props.resource,
          resource = _props$resource === undefined ? {} : _props$resource,
          _props$contextualizer = _props.contextualizer,
          contextualizer = _props$contextualizer === undefined ? {} : _props$contextualizer,
          _props$allowInteracti = _props.allowInteractions,
          allowInteractions = _props$allowInteracti === undefined ? true : _props$allowInteracti,
          fixed = _props.fixed,
          onExit = _props.onExit,
          _state = this.state,
          data = _state.data,
          loading = _state.loading,
          _context = this.context,
          dimensions = _context.dimensions,
          _context$datasets = _context.datasets,
          datasets = _context$datasets === undefined ? {} : _context$datasets;


      var thumbnail = resource.data.thumbnailDataset && datasets[resource.data.thumbnailDataset];

      return loading === false ? _react2.default.createElement(
        'figure',
        { className: 'peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-data-presentation' },
        thumbnail && thumbnail.uri ? _react2.default.createElement('img', { className: 'resource-thumbnail',
          src: thumbnail.uri
        }) : _react2.default.createElement('div', { className: 'thumbnail-placeholder' }),
        _react2.default.createElement(
          'div',
          { className: 'data-presentation-header' },
          _react2.default.createElement(
            'h2',
            null,
            data.metadata.title
          ),
          _react2.default.createElement(
            'p',
            { className: 'data-presentation-authors' },
            data.metadata.authors.join(', '),
            '.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'data-presentation-body' },
          contextualizer.displayCommentsInCodex && data.order.map(function (slideId) {
            return _react2.default.createElement(
              'div',
              { key: slideId, className: 'static-slide' },
              _react2.default.createElement(
                'h3',
                null,
                data.slides[slideId].title
              ),
              _react2.default.createElement(_reactMarkdown2.default, {
                source: data.slides[slideId].markdown
              })
            );
          })
        )
      ) : null;
    }
  }]);
  return BlockStatic;
}(_react.Component), _class.contextTypes = {
  datasets: _propTypes2.default.object
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getDataset = function (props) {
    return _this2.context && _this2.context.datasets && _this2.context.datasets[props.resource.data.presentationDataset];
  };

  this.updateData = function (props) {
    var dataset = _this2.getDataset(props);
    if (dataset === undefined) {
      return;
    }
    if (dataset.rawData) {
      _this2.setState({
        loading: false,
        data: dataset.rawData,
        error: undefined
      });
    } else if (dataset.uri) {
      _this2.setState({
        loading: true,
        error: undefined
      });
      (0, _axios.get)(dataset.uri).then(function (response) {
        var data = response.data;
        _this2.setState({
          data: data,
          loading: false
        });
      }).catch(function (error) {
        _this2.setState({
          error: error
        });
      });
    } else {
      _this2.setState({
        error: 'no-dataset'
      });
    }
  };
}, _temp);
exports.default = BlockStatic;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ })
/******/ ])["default"];