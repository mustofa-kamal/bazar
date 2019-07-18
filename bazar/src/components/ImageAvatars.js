import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { deepOrange, deepPurple } from '@material-ui/core/colors';


const useStyles = makeStyles({
  avatar: {
    margin: 10,
    backgroundColor: deepOrange[500],

   
  },

  root: {
    padding: 1,
    borderRadius:4,
    border: "1px solid gray",
    margin:3

   
  }

  
});





const ImageAvatars = (props) => {


  const classes = useStyles();

  const {parentCallback} = props;

  const {allsrces} = props;

  const thumpnailClick = (e) => {
    console.log('Click');
    parentCallback(e.target.src);
  
  }

  const items = allsrces.map((item, key) =>
  <Avatar onClick={(e) => thumpnailClick(e)} style={{cursor: 'pointer'}} alt="Remy Sharp" className={classes.root} src={item} key={item}/>
);

  return (
    <Grid container justify="center" alignItems="center">
      {items}
    </Grid>


  );
}

export default ImageAvatars;
