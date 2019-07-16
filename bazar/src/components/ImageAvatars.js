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







export default function ImageAvatars({parentCallback}) {
  const classes = useStyles();

  const thumpnailClick = (e) => {
    console.log('Click');
    parentCallback(e.target.src);
  
  }

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar  onClick={(e) => thumpnailClick(e)} style={{cursor: 'pointer'}} alt="Remy Sharp" src="http://localhost:3000/ck-shirt10.jpg" className={classes.root} />
      <Avatar onClick={(e) => thumpnailClick(e)} style={{cursor: 'pointer'}} alt="Remy Sharp" src="http://localhost:3000/ck-shirt11.jpg" className={classes.root} />
      <Avatar onClick={(e) => thumpnailClick(e)} style={{cursor: 'pointer'}} alt="Remy Sharp" src="http://localhost:3000/ck-shirt12.jpg" className={classes.root} />
      <Avatar onClick={(e) => thumpnailClick(e)} style={{cursor: 'pointer'}} alt="Remy Sharp" src="http://localhost:3000/ck-shirt20.jpg" className={classes.root} />
      <Avatar onClick={(e) => thumpnailClick(e)} style={{cursor: 'pointer'}} alt="Remy Sharp" src="http://localhost:3000/ck-shirt20.jpg" className={classes.root} />
      <Avatar onClick={(e) => thumpnailClick(e)} style={{cursor: 'pointer'}} alt="Remy Sharp" src="http://localhost:3000/ck-shirt20.jpg" className={classes.root} />
      <Avatar onClick={(e) => thumpnailClick(e)} style={{cursor: 'pointer'}} alt="Remy Sharp" src="http://localhost:3000/ck-shirt20.jpg" className={classes.root} />
      <Avatar onClick={(e) => thumpnailClick(e)} style={{cursor: 'pointer'}} alt="Remy Sharp" src="http://localhost:3000/ck-shirt20.jpg" className={classes.root} />
      <Avatar onClick={(e) => thumpnailClick(e)} style={{cursor: 'pointer'}} alt="Remy Sharp" src="http://localhost:3000/ck-shirt20.jpg" className={classes.root} />

    </Grid>
  );
}
