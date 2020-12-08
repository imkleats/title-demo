import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import movieProvider from "./db/movieProvider";
import apiRoute from "./api";
import graphqlRoute from "./graphql";

const app = express();
const port = process.env.EXPRESS_PORT || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet({ contentSecurityPolicy: false })); // Graphiql doesn't play nice with CSP

// Middleware to load Model/Service on Request Object
// for use in controllers.
const useMovieProvider = (req, res, next) => {
  req.movieProvider = movieProvider;
  next();
};

// Can you guess my secret?
app.get("/secret", (req, res) => {
  res.send("I love burritos and " + process.env?.MY_FAVORITE);
});

app.use("/api", useMovieProvider, apiRoute);
app.use("/graphql", useMovieProvider, graphqlRoute);

// Serve static assets (i.e. the built React app)
app.use(express.static(path.join(__dirname, "..", "build")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.use((err, req, res, next) => {
  if (err) {
    console.error(err.message);
    console.error(err.stack);
    return res.status(err.output.statusCode || 500).json(err.output.payload);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
