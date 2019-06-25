import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  
  
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea style={{display:"flex"}}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="poloShirt.jpg"
          title="Contemplative Reptile"
          style={{width:"30%"}}
        />
        <CardContent style={{width:"70%"}}>
          <Typography gutterBottom variant="subtitle2" component="h2">
          Men's Ralph Lauren Polo T-shirt All Size, 100% cotton Crew Neck Short Sleeve

          </Typography>


          <div style={{display:"flex"}}>
          <CardContent style={{width:"50%"}}>
         
            <Typography variant="body2" color="textSecondary" component="p">
            Men's Ralph Lauren Polo T-shirt All Size, 100%cotton Crew Neck Short Sleeve
            </Typography>
          </CardContent>

          <CardContent style={{width:"50%"}}>
         
            <Typography variant="body2" color="textSecondary" component="p">
            Men's Ralph Lauren Polo T-shirt All Size, 100%cotton Crew Neck Short Sleeve
            </Typography>
          </CardContent>
          </div>





         


        </CardContent>

       
        

       


      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
