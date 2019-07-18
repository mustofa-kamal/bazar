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

  const Details = (props) => {

    const classes = useStyles();

    const {srces} = props.location.state;


    const {title} = props.location.state;

    const [currentSrc, setCurrentSrc] = useState(srces[0]);

    const [currentTitle, setCurrentTitle] = useState(title);

    const [allsrces, setAllsrces]= useState(srces);


  


  
  




  useEffect(() => {
    document.body.style.backgroundColor = "#eeeeee";
    
   



 }, []);



  



  


  const callbackcurrentImgSrc = (currentSrc) => {
    setCurrentSrc(currentSrc);
  }





  return (
    <div className={classes.root}>
      <Grid container spacing={2}>


        
        <Grid item xs={5}>

          <ImageMediaCard currentSrc={currentSrc} />

        </Grid>

        <Grid item xs={4}>
          description
          <ImageAvatars parentCallback={callbackcurrentImgSrc} allsrces={allsrces}/>



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


export default Details;
