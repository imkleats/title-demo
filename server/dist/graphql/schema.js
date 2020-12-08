"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movieSchema = exports.resolvers = exports.typeDefs = void 0;

var _graphqlTools = require("graphql-tools");

// I don't know if there's a strong preference between
// code-first or schema-first approaches on the team.
// This is just how I tend to roll my own, but YMMV.
var typeDefs = "\ntype Person {\n  name: String\n}\n\ntype Genre {\n  name: String\n}\n\ntype Title {\n  tmdbId: ID!\n  title: String!\n  actors: [Person]\n  plot: String!\n  genres: [Genre]\n  directors: [Person]\n  imdbRating: Float\n  released: String\n  thumbnail: String\n}\n\ntype Query {\n  getTitles(limit: Int = 20, offset: Int = 0): [Title]\n  # getTitle(_id: ID!): Title\n}\n";
exports.typeDefs = typeDefs;
var resolvers = {
  // root entry point to GraphQL service
  Query: {
    getTitles: function getTitles(object, _ref, ctx, resolveInfo) {
      var limit = _ref.limit,
          offset = _ref.offset;

      // If the acceptance criteria didn't state that the return type
      // of getTitles needed to be [Title], I'd have opted for a more
      // Relay-like approach to get pagination details. Could probably
      // figure out a way to get it onto the response as an extension,
      // but Apollo Client fetchMore works -- just have a hardcode data length.
      var _ctx$movieProvider$ge = ctx.movieProvider.getMany({
        limit: limit,
        offset: offset
      }),
          movieList = _ctx$movieProvider$ge.movieList;

      return movieList;
    }
    /* Commenting out because instructions say only one endpoint
    getTitle: (object, { _id }, ctx, resolveInfo) => {
      const movie = ctx.movieProvider.findById(_id);
      return movie;
    },
    */

  }
};
exports.resolvers = resolvers;
var movieSchema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: resolvers
});
exports.movieSchema = movieSchema;