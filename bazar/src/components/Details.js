import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper' ;
import Grid from '@material-ui/core/Grid';
import ImageMediaCard from "./ImageMediaCard"
import ImageAvatars from './ImageAvatars';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    width: "100%"
  }

  
}));

export default function Details() {

  useEffect(() => {
    document.body.style.backgroundColor = "#eeeeee";
 }, []);


 

  const classes = useStyles();

  const [imgSrc, setImgSrc] = useState('');


  const callbackImgSrc = (imgSrc) => {
    setImgSrc(imgSrc);
  }



  return (
    <div className={classes.root}>
      <Grid container spacing={2}>


        
        <Grid item xs={5}>

          <ImageMediaCard imgSrc={imgSrc} />

        </Grid>

        <Grid item xs={4}>
          description
          <ImageAvatars parentCallback={callbackImgSrc}/>



        </Grid>

        <Grid item xs={3}>

        add to bag

        </Grid>


        
        
       
     </Grid>
     <br/>
     <br/>
     </div>
     
  );
}
