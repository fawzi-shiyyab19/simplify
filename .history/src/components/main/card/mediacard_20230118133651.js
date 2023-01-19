import { Button, Card, Grid, CardContent, CardMedia, Typography,CardActions } from "@mui/material";
import  Images  from '../../../assets/simplify.png';



export default function MediaCard({ image, title, description }) {
  return (
    <Grid component={Card}  >
         <CardMedia component='img' image={Images} title={title} />
         <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>

      <CardActions ma>
        <Button size="small" color="secondary">
          like
        </Button >
        <Button size="small" color="secondary">
          Learn more about cats
        </Button>
      </CardActions>
    </Grid>
  );
}