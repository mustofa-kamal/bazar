import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Box from '@material-ui/core/Box';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%"
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
     
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'Search' }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
     
    </Paper>
  );
}



const useStyles1 = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SearchBox() {
  const classes = useStyles1();

 

  return (
    <Grid container className={classes.root} spacing={2}>

<Grid item xs={2}>
<div style={{border:"1px solid red", width:"20px", height:"30px"}}>dsf</div>
       
   </Grid>

      <Grid item xs={10}>
       
                <CustomizedInputBase/>
            </Grid>

           

         
       


     
    </Grid>
  );
}
