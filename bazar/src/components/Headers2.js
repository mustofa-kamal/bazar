import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink, BrowserRouter } from "react-router-dom";
import Clothing from './Clothing'
import Box from '@material-ui/core/Box';








const useStyles = makeStyles(theme => ({
  root: {

    padding: theme.spacing(1, 1),
    padding:"2px 20px"
  },
}));

export default function Headers() {
  const classes = useStyles();

  

  return (
    <div>
      <Paper className={classes.root} square={true}>

      <div style={{ width: '100%' }}>

      <Box display="flex" p={0}>

      <Box p={1} flexGrow={1}>



       

          
                <Typography variant="button" color="primary">
                      <RouterLink to="Signin">

                    Sign in 
                    </RouterLink>
                    
                    <span style={{color:"#000000"}}> or </span>



                    <RouterLink to="Register">

                    Register
                    </RouterLink>

                </Typography>

                </Box>

               

                
               
                <Box p={1}>

                <Typography variant="button" color="primary">
                      <RouterLink to="Signin">
                          Icon
                    </RouterLink>                    
                </Typography>

                </Box>


                  
                
  




  </Box>
  </div>
  
  </Paper>
  </div>
  );
}
