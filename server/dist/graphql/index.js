"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _schema = require("./schema");

var graphqlRoute = _express["default"].Router();

graphqlRoute.use("/", (0, _expressGraphql.graphqlHTTP)(function (req, res, graphqlParams) {
  return {
    schema: _schema.movieSchema,
    context: {
      movieProvider: req.movieProvider
    },
    graphiql: true
  };
}));
var _default = graphqlRoute;
exports["default"] = _default;