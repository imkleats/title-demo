import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  makeStyles,
} from "@material-ui/core";
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

const LoadMoreCard = ({ onLoadMore }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onLoadMore}>
        <CardContent className={classes.media}>
          <Skeleton variant="text" animation={false} />
          <Skeleton variant="circle" width={40} height={40} animation={false} />
          <Skeleton variant="rect" height={150} animation={false} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onLoadMore}>
          Load More Titles...
        </Button>
      </CardActions>
    </Card>
  );
};

export default LoadMoreCard;
