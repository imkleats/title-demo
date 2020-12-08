"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var neo4j = require("neo4j-driver");

var fetch = require("node-fetch");
/***************************************************************
 * To demo their recommendation engine capabilities, Neo4j
 * maintains a movie dataset sourced from IMDB and TMDB.
 *
 * One issue is that the links to the IMDB movie poster images are
 * stale. Because the records have a TMDB identifier, I set up a
 * quick function to query a small sample (150 movies) from Neo4j,
 * run a `fetch` against the TMDB API to get a fresh poster path,
 * and save the resulting array for use as an in-memory datastore.
 *
 ***************************************************************/


var fs = require("fs");

var logger = fs.createWriteStream("movies.json", {
  flags: "a" // 'a' means appending (old data will be preserved)

});
var driver = neo4j.driver(process.env.NEO4J_URI || "bolt://localhost:7687", neo4j.auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "notneo4j"));

var collectPosterInfo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(driver) {
    var _result$records, session, result, movies, moviesWithPoster;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            session = driver.session();
            _context2.next = 4;
            return session.run("MATCH (m:Movie)\n        CALL {\n          WITH m\n          MATCH (m)<-[:ACTED_IN]-(a:Actor)\n          RETURN collect(a {.name}) as actors\n        }\n        call {\n          WITH m\n          MATCH (m)<-[:DIRECTED]-(d:Director)\n          RETURN collect(d {.name}) as directors\n        }\n        call {\n          WITH m\n          MATCH (m)-[:IN_GENRE]->(g:Genre)\n          RETURN collect(g {.name}) as genres\n        }\n        RETURN m { .title, .tmdbId, .plot, .imdbRating, .released, actors: actors, directors: directors, genres: genres} as movies LIMIT 150", {});

          case 4:
            result = _context2.sent;
            movies = result === null || result === void 0 ? void 0 : (_result$records = result.records) === null || _result$records === void 0 ? void 0 : _result$records.map(function (record) {
              return record.get("movies");
            });
            session.close();
            moviesWithPoster = Promise.all(movies.map( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(movie) {
                var thumbnail;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fetch("https://api.themoviedb.org/3/movie/".concat(movie.tmdbId, "?api_key=").concat(process.env.TMDB_API_KEY, "&language=en-US")).then(function (res) {
                          return res.json();
                        }).then(function (data) {
                          return "https://image.tmdb.org/t/p/w154".concat(data["poster_path"]);
                        });

                      case 2:
                        thumbnail = _context.sent;
                        return _context.abrupt("return", _objectSpread(_objectSpread({}, movie), {}, {
                          thumbnail: thumbnail
                        }));

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }()));
            return _context2.abrupt("return", moviesWithPoster);

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function collectPosterInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();

collectPosterInfo(driver).then(function (result) {
  console.log("Connected and inferred");
  logger.write(JSON.stringify(result, null, 2));
  console.log("completed inference");
  process.exit();
})["catch"](function (e) {
  return console.error(e);
});