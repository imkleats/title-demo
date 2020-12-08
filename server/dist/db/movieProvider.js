"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _movies = _interopRequireDefault(require("./movies"));

// This is intended to be analogous to whatever
// interface you might get with an ORM or what have you
// that abstracts away the connection with the persistence
// layer.
var movieProvider = {
  getMany: function getMany(_ref) {
    var _limit, _offset;

    var limit = _ref.limit,
        offset = _ref.offset;
    limit = (_limit = limit) !== null && _limit !== void 0 ? _limit : 20;
    offset = (_offset = offset) !== null && _offset !== void 0 ? _offset : 0;
    return {
      movieList: _movies["default"].slice(offset, offset + limit),
      pageDetail: {
        offset: offset,
        limit: limit,
        totalRecords: _movies["default"].length
      }
    };
  },
  findById: function findById(_id) {
    return _movies["default"].find(function (movie) {
      return movie.tmdbId === _id;
    });
  }
};
var _default = movieProvider;
exports["default"] = _default;