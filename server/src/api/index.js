import express from "express";

const apiRoute = express.Router();

/*
 * In `../graphql/schema.js`, I mentioned how I'd include some pagination info if
 * not for the explicit instruction about returning only
 */

apiRoute.get("/titles", async (req, res) => {
  try {
    //const limit = req.query.limit ?? 20;
    //const offset = req.query.offset ?? 0;
    const { limit, offset } = req.query;
    const { movieList, pageDetail } = req.movieProvider.getMany({
      limit,
      offset,
    });
    res.status(200).json({ data: movieList, ...pageDetail });
  } catch (e) {
    res.status(500).json({ message: `Error retrieving movies: ${e.message}` });
  }
});

export default apiRoute;
