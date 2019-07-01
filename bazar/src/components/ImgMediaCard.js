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



  function ObjectToUrlParam(obj){
  let param = '';  
  Object.entries(obj).forEach(entry => {

    let key = entry[0];
    let value = entry[1];
    if (value){
      param = param + "&size=" + key ;
    }
    
  });
  return param;
  
  }



const GalleryItem = (props) => {
  const classes = useStyles();

  return (



        <Fragment>
            <Card className={classes.card} square={true} >
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
                      {props.title}
                  </Typography>


                  <div style={{display:"flex"}}>
                  <CardContent style={{width:"50%", padding:0}}>
                
                    
                        <ul className={classes.u}>
                          <li><Typography  variant="subtitle2" component="h2">{props.price} taka</Typography></li>
                          <li>{props.shipping} - sheeping</li>
                        </ul>
                    
                  </CardContent>

                  <CardContent style={{width:"50%",padding:0}}>
                
                    <ul className={classes.u}>
                      <li>Brand: {props.brand}</li>

                      <li>Pattern: Solid</li>

                      <li>Material: 100% Cotton</li>

                      <li>Size: {props.size}</li>

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




  );
}







 


 





const ImgMediaCard = (props) => {
  const [hasError, setErrors] = useState(false);
  const [items, setItems  ] = useState([]);
  const offset = props.offset;
  const selectedSortItem = props.selectedSortItem;

  const checkedFilterItems=props.checkedFilterItems;

  let urlParam='';
  if (checkedFilterItems){
    urlParam = ObjectToUrlParam(checkedFilterItems);
  }

  const limit = 10

  let page = (offset/limit)+1;

  ///articles/1/comments?author.username=rpierlot
  //"http://localhost:3001/title?_page=1&_limit=10&_sort=size"

  //"XS=false&S=false&M=false&L=true&XL=false&XXL=false&XXXL=false"
 
  async function fetchData() {
    let url = "http://localhost:3001/title?_page="+page+"&_limit="+
    limit+"&_sort="+selectedSortItem +""+ urlParam
   
    let res = await fetch(url);
    res
      .json()
      .then(res => setItems(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData()
  }, [offset,selectedSortItem,urlParam])

  return (

    items.map((item, i) =>

        <GalleryItem key={i} img={item.img} title={item.title} 
        price={item.price} shipping={item.shipping} brand={item.brand}
        size={item.size}/>

    )
  
    );

   
};




export default ImgMediaCard;






  






  

  


 
      

  



  
  

