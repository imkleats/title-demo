import { makeExecutableSchema } from "graphql-tools";

// I don't know if there's a strong preference between
// code-first or schema-first approaches on the team.
// This is just how I tend to roll my own, but YMMV.

const typeDefs = `
type Person {
  name: String
}

type Genre {
  name: String
}

type Title {
  tmdbId: ID!
  title: String!
  actors: [Person]
  plot: String!
  genres: [Genre]
  directors: [Person]
  imdbRating: Float
  released: String
  thumbnail: String
}

type Query {
  getTitles(limit: Int = 20, offset: Int = 0): [Title]
  # getTitle(_id: ID!): Title
}
`;

const resolvers = {
  // root entry point to GraphQL service
  Query: {
    getTitles: (object, { limit, offset }, ctx, resolveInfo) => {
      // If the acceptance criteria didn't state that the return type
      // of getTitles needed to be [Title], I'd have opted for a more
      // Relay-like approach to get pagination details. Could probably
      // figure out a way to get it onto the response as an extension,
      // but Apollo Client fetchMore works -- just have a hardcode data length.
      const { movieList } = ctx.movieProvider.getMany({ limit, offset });
      return movieList;
    },
    /* Commenting out because instructions say only one endpoint
    getTitle: (object, { _id }, ctx, resolveInfo) => {
      const movie = ctx.movieProvider.findById(_id);
      return movie;
    },
    */
  },
};

const movieSchema = makeExecutableSchema({ typeDefs, resolvers });

export { typeDefs, resolvers, movieSchema };
