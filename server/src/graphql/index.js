import express from "express";
import { graphqlHTTP } from "express-graphql";
import { movieSchema } from "./schema";

const graphqlRoute = express.Router();

graphqlRoute.use(
  "/",
  graphqlHTTP((req, res, graphqlParams) => {
    return {
      schema: movieSchema,
      context: {
        movieProvider: req.movieProvider,
      },
      graphiql: true,
    };
  })
);

export default graphqlRoute;
