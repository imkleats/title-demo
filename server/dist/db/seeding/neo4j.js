"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSession = getSession;
exports.neo4jSessionCleanup = neo4jSessionCleanup;

var _neo4jDriver = _interopRequireDefault(require("neo4j-driver"));

var driver = _neo4jDriver["default"].driver(process.env.NEO4J_URI || "bolt://localhost:7687", _neo4jDriver["default"].auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "notneo4j"));

function getSession(context) {
  if (context.neo4jSession) {
    return context.neo4jSession;
  } else {
    context.neo4jSession = driver.session();
    return context.neo4jSession;
  }
}

function neo4jSessionCleanup(req, res, next) {
  res.on("finish", function () {
    if (req.neo4jSession) {
      req.neo4jSession.close();
      delete req.neo4jSession;
    }
  });
  next();
}