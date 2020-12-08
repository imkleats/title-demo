"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _uuid = require("uuid");

var _joi = _interopRequireDefault(require("joi"));

var _boom = _interopRequireDefault(require("boom"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _utility = _interopRequireDefault(require("./utility"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var authRoute = _express["default"].Router();

authRoute.post("/register", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var schema, _schema$validate, error, value, username, password, userId, hashedPw, user_query, _result$records, session, result, existing_users, _session, createResult;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // validate username and password
            schema = _joi["default"].object().keys({
              username: _joi["default"].string().required(),
              password: _joi["default"].string().required()
            });
            _schema$validate = schema.validate(req.body), error = _schema$validate.error, value = _schema$validate.value;

            if (!error) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", next(_boom["default"].badRequest(error.details[0].message)));

          case 4:
            username = value.username, password = value.password;
            userId = (0, _uuid.v4)();
            _context.prev = 6;
            _context.next = 9;
            return _bcrypt["default"].hash(password, 10);

          case 9:
            hashedPw = _context.sent;
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](6);
            console.error(_context.t0);
            return _context.abrupt("return", _boom["default"].badImplementation(_context.t0.message));

          case 16:
            _context.prev = 16;
            session = req.driver.session();
            _context.next = 20;
            return session.run("MATCH (user:AppUser { username: $username }) RETURN user { .username }", {
              username: username
            });

          case 20:
            result = _context.sent;
            existing_users = result === null || result === void 0 ? void 0 : (_result$records = result.records) === null || _result$records === void 0 ? void 0 : _result$records.map(function (record) {
              return record.toObject();
            });
            session.close();

            if (!(existing_users && existing_users.length > 0)) {
              _context.next = 25;
              break;
            }

            throw _boom["default"].badRequest("User already exists");

          case 25:
            _context.next = 34;
            break;

          case 27:
            _context.prev = 27;
            _context.t1 = _context["catch"](16);

            if (!((_context.t1 === null || _context.t1 === void 0 ? void 0 : _context.t1.message) === "User already exists")) {
              _context.next = 33;
              break;
            }

            return _context.abrupt("return", next(_context.t1));

          case 33:
            return _context.abrupt("return", next(_boom["default"].badImplementation("Unable to create user: " + _context.t1.message)));

          case 34:
            _context.prev = 34;
            _session = req.driver.session();
            _context.next = 38;
            return _session.run("CREATE (a:AppUser $user) RETURN a", {
              user: {
                userId: userId,
                username: username,
                hashedPw: hashedPw
              }
            });

          case 38:
            createResult = _context.sent;
            console.log(createResult);

            _session.close();

            _context.next = 46;
            break;

          case 43:
            _context.prev = 43;
            _context.t2 = _context["catch"](34);
            return _context.abrupt("return", next(_boom["default"].badImplementation("Unable to create user: " + _context.t2.message)));

          case 46:
            res.send("Ok");

          case 47:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 12], [16, 27], [34, 43]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
authRoute.post("/login", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var schema, _schema$validate2, error, value, username, password, user_query, session, result, user, match, refresh_token, _session2, _result, jwt_token, jwt_token_expiry;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // validate username and password
            schema = _joi["default"].object().keys({
              username: _joi["default"].string().required(),
              password: _joi["default"].string().required()
            });
            _schema$validate2 = schema.validate(req.body), error = _schema$validate2.error, value = _schema$validate2.value;

            if (!error) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", next(_boom["default"].badRequest(error.details[0].message)));

          case 4:
            username = value.username, password = value.password;
            _context2.prev = 5;
            session = req.driver.session();
            _context2.next = 9;
            return session.run("MATCH (user:AppUser {username: $username}) RETURN user { .username, .hashedPw, .name, .userId }", {
              username: username
            });

          case 9:
            result = _context2.sent;
            user_query = result.records.map(function (record) {
              return record.toObject();
            });
            session.close();
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](5);
            return _context2.abrupt("return", next(_boom["default"].unauthorized("Unable to find 'user'")));

          case 17:
            if (!(user_query.length === 0 || user_query.length > 1)) {
              _context2.next = 19;
              break;
            }

            return _context2.abrupt("return", next(_boom["default"].unauthorized("Invalid 'username' or 'password'.")));

          case 19:
            user = user_query[0].user;
            _context2.next = 22;
            return _bcrypt["default"].compare(password, user.hashedPw);

          case 22:
            match = _context2.sent;

            if (match) {
              _context2.next = 25;
              break;
            }

            return _context2.abrupt("return", next(_boom["default"].unauthorized("Invalid 'username' or 'password'.")));

          case 25:
            refresh_token = (0, _uuid.v4)();
            _context2.prev = 26;
            _session2 = req.driver.session();
            _context2.next = 30;
            return _session2.run("MATCH (u:AppUser {userId: $userId}) SET u.refreshToken = $refresh_token RETURN u.refreshToken as refreshToken", _objectSpread(_objectSpread({}, user), {}, {
              refresh_token: refresh_token
            }));

          case 30:
            _result = _context2.sent;

            _session2.close();

            _context2.next = 37;
            break;

          case 34:
            _context2.prev = 34;
            _context2.t1 = _context2["catch"](26);
            return _context2.abrupt("return", next(_boom["default"].badImplementation("Error setting refresh token")));

          case 37:
            jwt_token = (0, _utility["default"])(user);
            jwt_token_expiry = new Date(new Date().getTime() + process.env.JWT_TOKEN_EXPIRES * 60 * 1000);
            res.cookie("refresh_token", refresh_token, {
              maxAge: process.env.REFRESH_TOKEN_EXPIRES * 60 * 1000,
              // convert from minute to milliseconds
              httpOnly: true,
              secure: false
            });
            res.cookie("has_refresh", true, {
              maxAge: process.env.REFRESH_TOKEN_EXPIRES * 60 * 1000,
              // convert from minute to milliseconds
              httpOnly: false,
              secure: false
            });
            res.json({
              jwt_token: jwt_token,
              jwt_token_expiry: jwt_token_expiry,
              refresh_token: refresh_token,
              refresh_token_expiry: process.env.REFRESH_TOKEN_EXPIRES * 60 * 1000,
              user_id: user.userId
            });

          case 42:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 14], [26, 34]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
authRoute.post("/logout", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res.cookie("refresh_token", "", {
              httpOnly: true,
              expires: new Date(0)
            });
            res.cookie("has_refresh", "", {
              httpOnly: false,
              expires: new Date(0)
            });
            res.send("OK");

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
authRoute.post("/refresh-token", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var refresh_token, user_query, session, result, user, new_refresh_token, _session3, _result2, jwt_token, jwt_token_expiry;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            refresh_token = req.cookies["refresh_token"];
            console.log(refresh_token);
            _context4.prev = 2;
            session = req.driver.session();
            _context4.next = 6;
            return session.run("MATCH (user:AppUser {refreshToken: $refresh_token} ) RETURN user {.userId, .name, .refreshToken}", {
              refresh_token: refresh_token
            });

          case 6:
            result = _context4.sent;
            user_query = result.records.map(function (record) {
              return record.toObject();
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](2);
            return _context4.abrupt("return", next(_boom["default"].unauthorized("Invalid refresh token")));

          case 13:
            if (!(user_query.length === 0 || user_query.length > 1)) {
              _context4.next = 15;
              break;
            }

            return _context4.abrupt("return", next(_boom["default"].unauthorized("Invalid refresh token")));

          case 15:
            // One and only one user with the refresh token has been found.
            user = user_query[0].user;
            new_refresh_token = (0, _uuid.v4)();
            _context4.prev = 17;
            _session3 = req.driver.session();
            _context4.next = 21;
            return _session3.run("MATCH (u:AppUser {userId: $userId}) SET u.refreshToken = $new_refresh_token RETURN u.refreshToken as refreshToken", _objectSpread(_objectSpread({}, user), {}, {
              new_refresh_token: new_refresh_token
            }));

          case 21:
            _result2 = _context4.sent;

            _session3.close();

            _context4.next = 28;
            break;

          case 25:
            _context4.prev = 25;
            _context4.t1 = _context4["catch"](17);
            return _context4.abrupt("return", next(_boom["default"].badImplementation("Error updating refresh token")));

          case 28:
            jwt_token = (0, _utility["default"])(user);
            jwt_token_expiry = new Date(new Date().getTime() + process.env.JWT_TOKEN_EXPIRES * 60 * 1000);
            res.cookie("refresh_token", new_refresh_token, {
              maxAge: process.env.REFRESH_TOKEN_EXPIRES * 60 * 1000,
              // convert from minute to milliseconds
              httpOnly: true,
              secure: false
            });
            res.cookie("has_refresh", true, {
              maxAge: process.env.REFRESH_TOKEN_EXPIRES * 60 * 1000,
              // convert from minute to milliseconds
              httpOnly: false,
              secure: false
            });
            res.json({
              jwt_token: jwt_token,
              jwt_token_expiry: jwt_token_expiry,
              refresh_token: new_refresh_token,
              refresh_token_expiry: process.env.REFRESH_TOKEN_EXPIRES * 60 * 1000,
              user_id: user.userId
            });

          case 33:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 10], [17, 25]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}());
authRoute.get("/csrf-token", function (req, res) {
  return res.json({
    csrfToken: req.csrfToken()
  });
});
authRoute.get("/me", (0, _expressJwt["default"])({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"]
}), function (req, res) {
  return res.json({
    name: "Sam Neill"
  });
});
var _default = authRoute;
exports["default"] = _default;