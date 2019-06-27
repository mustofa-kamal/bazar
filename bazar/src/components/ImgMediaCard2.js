import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { Link as RouterLink, BrowserRouter } from "react-router-dom";



const useStyles = makeStyles({

  u: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
    }
    
  

  
  
});







const ImgMediaCard = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState([]);

  async function fetchData() {
    const res = await fetch("http://localhost:3001/title");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData()
  }, [])


 


  return (

    planets.map((item, key) =>
    <div>{item.img}</div>
    )
  
    );
};
export default ImgMediaCard;






  /* const GalleryItem = (props) => {
    return (
      <RouterLink to="/repos/reactjs/react-router">



          <Fragment>
              <Card className={classes.card}>
                <CardActionArea style={{display:"flex"}}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={props.img}
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
                            <li><Typography  variant="subtitle2" component="h2">100 - 170 taka</Typography></li>
                            <li>Free Sheeping</li>
                          </ul>
                      
                    </CardContent>

                    <CardContent style={{width:"50%",padding:0}}>
                  
                      <ul className={classes.u}>
                        <li>Free Sheeping</li>
                        <li>Brand: Lauren Ralph Lauren</li>

                        <li>Pattern: Solid</li>

                        <li>Material: 100% Cotton</li>

                      </ul>

                    </CardContent>
                    </div>





                  


                  </CardContent>

                
                  

                


                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Add to bag
                  </Button>
                
                </CardActions>
              
              </Card>
              </Fragment>




      </RouterLink>
    );
  }


  const initGalleryItems = (result) => {
    return (
      result.map((item, i) =>
        <GalleryItem key={i} img={item.img} title={item.title} url='https://material-ui.com/components/grid-list/'/>
      )
    )
  } */


  


 
      

  



  
  

