import React, { Fragment, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Selects from './Selects'
import CarouselList from './CarouselList';
import Footer from './Footer'
import  ImgMediaCard from './ImgMediaCard'
import Box from '@material-ui/core/Box';


import FlatPagination from './FlatPagination'





const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    width: "95%",
  },
  control: {
    padding: theme.spacing(2),
  },


  flexcontainer: {
    display: "flex",
    justifyContent: "flex-end"
  }


}));




function Clothing() {
  return (
    <Fragment>

      <Clothing1 />

    </Fragment>
  )
}





function Clothing1() {
  useEffect(() => {
    document.body.style.backgroundColor = "#eeeeee";
    console.log("mount")
  }, []);

  const classes = useStyles();

  return (
    <Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>

            <Grid key={1} item xs={3}>
            </Grid>

            <Grid key={2} item xs={9}>
              <Paper className={classes.paper} >
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                ><Selects/>
                </Grid>



               


                 
                <ImgMediaCard offset={1}/>

               
                
                
                
                

              </Paper>
              <Paper className={classes.paper} style={{display:'flex',justifyContent: 'center'}}>
              <FlatPagination/>
              
              </Paper>
            </Grid>

          </Grid>
        </Grid>
      </Grid>

      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>

            <Grid key={1} item xs={3}>
              <div></div>
            </Grid>

            <Grid key={2} item xs={9}>
              <Paper className={classes.paper} >
                 


                
      <Box p={1} bgcolor="background.paper">
      <Typography color="primary"  variant="subtitle2" component="h2">
                        Recently Viewed Items
                  </Typography>
      </Box>

            

                <CarouselList />


              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>








    </Fragment>
  );
}





export default Clothing;
