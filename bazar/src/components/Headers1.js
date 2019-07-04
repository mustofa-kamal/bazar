import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink, BrowserRouter } from "react-router-dom";
import Clothing from './Clothing'






const gridStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

const useStyles = makeStyles(theme => ({
  root: {

    padding: theme.spacing(1, 1),
    padding:"2px 20px"
  },
}));

export default function Headers() {
  const classes = useStyles();

  const gridClasses = gridStyles();
  

  return (
    <div>
      <Paper className={classes.root} square={true}>
       
          <Grid container className={gridClasses.root} spacing={2}>
          <Grid item xs={12} style={{border:"1px solid red"}}>
            <Grid container justify="center" spacing={5}>
                <Grid key={1} item={true}>
                <Typography variant="button" color="primary">
                      <RouterLink to="Signin">

                    Sign in
                    </RouterLink>
                    
                    <span style={{color:"#000000"}}> or </span>



                    <RouterLink to="Register">

                    Register
                    </RouterLink>

                </Typography>

                </Grid>
                <Grid key={2} item>
                <Typography variant="button" color="primary">
                      <RouterLink to="Signin">
                          Daily Deals
                    </RouterLink>                    
                </Typography>

                </Grid>
                <Grid key={3} item>

                <Typography variant="button" color="primary">
                      <RouterLink to="Signin">
                          Help & Contact
                    </RouterLink>                    
                </Typography>


                  
                </Grid>
                <Grid key={4} item>
                  
                </Grid>

                <Grid key={5} item>
                
                </Grid>

                <Grid key={6} item>
                
                </Grid>
              
                <Grid key={7} item>
                
                </Grid>
              
                <Grid key={8} item>
                
                </Grid>
              
                <Grid key={9} item>
                </Grid>
              
                <Grid key={10} item>
                
                </Grid>
              
                <Grid key={11} item>
                
                </Grid>
              
                <Grid key={12} item>
                <Typography variant="button" color="primary">
                      <RouterLink to="Signin">
                          My Store
                    </RouterLink>                    
                </Typography>
                </Grid>
              
              
              
              
            </Grid>
          </Grid>

          
        </Grid>
  





      </Paper>
    </div>
  );
}
