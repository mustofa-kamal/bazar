import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({

  u: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
    }
    
  

  
  
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Fragment>
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
          <CardContent style={{width:"50%", padding:0}}>
         
            
                <ul className={classes.u}>
                  <li><Typography  color="secondary" variant="subtitle2" component="h2">100 - 170 taka</Typography></li>
                  <li>Free Sheeping</li>
                </ul>
            
          </CardContent>

          <CardContent style={{width:"50%",padding:0}}>
         
            <ul className={classes.u}>
              <li>Free Sheeping</li>
              <li>Brand: Lauren Ralph Lauren</li>

              <li>Pattern: Solid</li>

              <li><Typography  color="secondary" variant="subtitle2" component="h2">Material: 100% Cotton</Typography></li>

            </ul>

          </CardContent>
          </div>





         


        </CardContent>

       
        

       


      </CardActionArea>


      <CardActions>
        <Button size="small" color="primary">
          Add To Bag
        </Button>
       
      </CardActions>

     
    </Card>
    </Fragment>
  );
  
}
