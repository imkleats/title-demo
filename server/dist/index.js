"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _movieProvider = _interopRequireDefault(require("./db/movieProvider"));

var _api = _interopRequireDefault(require("./api"));

var _graphql = _interopRequireDefault(require("./graphql"));

var app = (0, _express["default"])();
var port = process.env.EXPRESS_PORT || 4000;
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use((0, _cookieParser["default"])());
app.use((0, _morgan["default"])("dev"));
app.use((0, _helmet["default"])({
  contentSecurityPolicy: false
})); // Graphiql doesn't play nice with CSP
// Middleware to load Model/Service on Request Object
// for use in controllers.

var useMovieProvider = function useMovieProvider(req, res, next) {
  req.movieProvider = _movieProvider["default"];
  next();
}; // Can you guess my secret?


app.get("/secret", function (req, res) {
  var _process$env;

  res.send("I love burritos and " + ((_process$env = process.env) === null || _process$env === void 0 ? void 0 : _process$env.MY_FAVORITE));
});
app.use("/api", useMovieProvider, _api["default"]);
app.use("/graphql", useMovieProvider, _graphql["default"]); // Serve static assets (i.e. the built React app)

app.use(_express["default"]["static"](_path["default"].join(__dirname, "..", "build")));
app.use(function (req, res) {
  res.sendFile(_path["default"].join(__dirname, "..", "build", "index.html"));
});
app.use(function (err, req, res, next) {
  if (err) {
    console.error(err.message);
    console.error(err.stack);
    return res.status(err.output.statusCode || 500).json(err.output.payload);
  }
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});