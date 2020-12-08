import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { gql, useQuery } from "@apollo/client";
import MovieFeed from "../MovieFeed/MovieFeed";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: 100,
    marginRight: 100,
  },
}));

// Hardcoding max records to disable more button
const MAX_PAGE_SIZE = 150;
const MAX_QUERY_SIZE = 20;

const TITLE_FEED_QUERY = gql`
  query($limit: Int, $offset: Int) {
    getTitles(limit: $limit, offset: $offset) {
      tmdbId
      title
      thumbnail
    }
  }
`;

function LandingPage() {
  const classes = useStyles();
  const [limit, setLimit] = useState(MAX_QUERY_SIZE);
  const { loading, data, fetchMore } = useQuery(TITLE_FEED_QUERY, {
    variables: {
      offset: 0,
      limit,
    },
  });

  return (
    <Paper square className={classes.paper}>
      <div className={classes.container}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <MovieFeed
            feed={data.getTitles || []}
            showMore={(data.getTitles.length || 0) < MAX_PAGE_SIZE}
            onLoadMore={() => {
              const currentLength = data.getTitles.length;
              fetchMore({
                variables: {
                  offset: currentLength,
                  limit: MAX_QUERY_SIZE,
                },
              }).then((fetchMoreResult) => {
                setLimit(currentLength + fetchMoreResult.data.getTitles.length);
              });
            }}
          />
        )}
      </div>
    </Paper>
  );
}

export default LandingPage;
