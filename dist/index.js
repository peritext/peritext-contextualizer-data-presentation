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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metadata = __webpack_require__(3);

var _metadata2 = _interopRequireDefault(_metadata);

var _BlockDynamic = __webpack_require__(4);

var _BlockDynamic2 = _interopRequireDefault(_BlockDynamic);

var _BlockStatic = __webpack_require__(7);

var _BlockStatic2 = _interopRequireDefault(_BlockStatic);

var _Player = __webpack_require__(9);

var _Player2 = _interopRequireDefault(_Player);

var _ScrollerLayout = __webpack_require__(10);

var _ScrollerLayout2 = _interopRequireDefault(_ScrollerLayout);

var _StepperLayout = __webpack_require__(11);

var _StepperLayout2 = _interopRequireDefault(_StepperLayout);

var _globals = __webpack_require__(12);

var _globals2 = _interopRequireDefault(_globals);

var _Timeline = __webpack_require__(13);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _SVGViewer = __webpack_require__(14);

var _SVGViewer2 = _interopRequireDefault(_SVGViewer);

var _Network = __webpack_require__(15);

var _Network2 = _interopRequireDefault(_Network);

var _Map = __webpack_require__(16);

var _Map2 = _interopRequireDefault(_Map);

var _leaflet = __webpack_require__(17);

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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
var inBrowser = isBrowser();

var QuinoaPresentationPlayer = void 0;
if (inBrowser) {
  QuinoaPresentationPlayer = __webpack_require__(6).default;
}

var BlockDynamic = function BlockDynamic(_ref, _ref2) {
  var _ref$resource = _ref.resource,
      resource = _ref$resource === undefined ? {} : _ref$resource,
      _ref$contextualizer = _ref.contextualizer,
      contextualizer = _ref$contextualizer === undefined ? {} : _ref$contextualizer,
      _ref$allowInteraction = _ref.allowInteractions,
      allowInteractions = _ref$allowInteraction === undefined ? true : _ref$allowInteraction,
      fixed = _ref.fixed,
      onExit = _ref.onExit;
  var dimensions = _ref2.dimensions;

  var onWheel = function onWheel(e) {
    if (fixed) {
      e.stopPropagation();
      e.preventDefault();
    }
  };
  var presentation = (0, _extends3.default)({}, resource.data.presentationData);

  var handleExit = function handleExit(direction) {
    if (typeof onExit === 'function') {
      onExit(direction);
    }
  };
  if (inBrowser && presentation) {
    presentation.settings = presentation.settings ? (0, _extends3.default)({}, presentation.settings, {
      template: contextualizer.displayMode || presentation.settings.template || 'scroller'
    }) : { template: contextualizer.displayMode || 'scroller' };
    return _react2.default.createElement(
      'figure',
      {
        className: 'peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-data-presentation'
      },
      _react2.default.createElement(QuinoaPresentationPlayer, {
        presentation: resource.data,
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
};

/**
 * Component's context used properties
 */
BlockDynamic.contextTypes = {
  /**
   * Dimensions of the wrapping element
   */
  dimensions: _propTypes2.default.object,
  /**
   * Whether the block asset is displayed in a note (and not in main content)
   */
  inNote: _propTypes2.default.bool
};

exports.default = BlockDynamic;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("quinoa-presentation-player");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMarkdown = __webpack_require__(8);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinkRenderer(props) {
  return _react2.default.createElement(
    'a',
    { href: props.href, target: '_blank' },
    props.children
  );
}

var BlockStatic = function BlockStatic(_ref, _ref2) {
  var resource = _ref.resource,
      contextualizer = _ref.contextualizer,
      contextualization = _ref.contextualization;
  var _ref2$datasets = _ref2.datasets,
      datasets = _ref2$datasets === undefined ? {} : _ref2$datasets;

  var presentationData = resource.data.presentationData;
  var dataset = datasets[resource.data.thumbnailDataset];
  return presentationData ? _react2.default.createElement(
    'figure',
    { className: 'peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-data-presentation' },
    dataset & dataset.uri ? _react2.default.createElement('img', { className: 'resource-thumbnail',
      src: dataset.uri
    }) : _react2.default.createElement('div', { className: 'thumbnail-placeholder' }),
    _react2.default.createElement(
      'div',
      { className: 'data-presentation-header' },
      _react2.default.createElement(
        'h2',
        null,
        presentationData.metadata.title
      ),
      _react2.default.createElement(
        'p',
        { className: 'data-presentation-authors' },
        presentationData.metadata.authors.join(', '),
        '.'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'data-presentation-body' },
      contextualizer.displayCommentsInCodex && presentationData.order.map(function (slideId) {
        return _react2.default.createElement(
          'div',
          { key: slideId, className: 'static-slide' },
          _react2.default.createElement(
            'h3',
            null,
            presentationData.slides[slideId].title
          ),
          _react2.default.createElement(_reactMarkdown2.default, {
            source: presentationData.slides[slideId].markdown
          })
        );
      })
    )
  ) : null;
};

BlockStatic.propTypes = {
  resource: _propTypes2.default.object,
  contextualizer: _propTypes2.default.object,
  contextualization: _propTypes2.default.object
};

BlockStatic.contexTypes = {
  datasets: _propTypes2.default.object
};

exports.default = BlockStatic;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "// removed by extract-text-webpack-plugin"

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

/***/ })
/******/ ])["default"];