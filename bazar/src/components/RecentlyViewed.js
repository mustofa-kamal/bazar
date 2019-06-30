
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CarouselList from './CarouselList';

import Box from '@material-ui/core/Box';



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
      justifyContent: "center"
    }
  
  
  }));

export default function RecentlyViewed(){

    const classes = useStyles();


return(

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
)
}