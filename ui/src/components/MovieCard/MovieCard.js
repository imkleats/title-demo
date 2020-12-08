import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles({
  root: {
    width: 154,
    margin: 10,
  },
  media: {
    height: 231,
    width: 154,
  },
});

const MovieCard = ({ movieTitle, moviePoster, moviePlot }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {moviePoster === "null" ? (
        <CardContent className={classes.media}>
          <Skeleton variant="text" animation={false} />
          <Skeleton variant="circle" width={40} height={40} animation={false} />
          <Skeleton variant="rect" height={150} animation={false} />
        </CardContent>
      ) : (
        <CardMedia
          className={classes.media}
          image={moviePoster}
          title={movieTitle + " Poster"}
        />
      )}
      <Typography gutterBottom variant="h6" component="p">
        {movieTitle}
      </Typography>
      {moviePlot && (
        <Typography variant="body2" color="textSecondary" component="p">
          {moviePlot}
        </Typography>
      )}
    </Card>
  );
};

export default MovieCard;
