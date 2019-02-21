'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jsonToCsvExport = require('json-to-csv-export');

var _jsonToCsvExport2 = _interopRequireDefault(_jsonToCsvExport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CsvDownload = function CsvDownload(props) {
  var data = props.data,
      filename = props.filename,
      others = _objectWithoutProperties(props, ['data', 'filename']);

  return _react2.default.createElement(
    'button',
    _extends({ onClick: function onClick() {
        return (0, _jsonToCsvExport2.default)(data, filename);
      } }, others),
    props.children || 'Download Data'
  );
};
exports.default = CsvDownload;