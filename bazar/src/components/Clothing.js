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
import FilterPanel from './FilterPanel';





const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1

  },
  paper: {
    width: "100%"
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
  useEffect(() => {
    document.body.style.backgroundColor = "#eeeeee";
    console.log("mount")
  }, []);

  const [offset, setOffset ] = useState(0);

  const [selectedSortItem, setSelectedSortItem ] = useState("size");


  const [checkedFilterItems, setCheckedFilterItems ] = useState([]);




  

  const callback = (offset) => {
      setOffset(offset);
  }

  const callbackSelect= (selectedSortItem) => {
    setSelectedSortItem(selectedSortItem);
  }

  const callbackFilter= (checkedFilterItems) => {
    setCheckedFilterItems(checkedFilterItems);
  }


  const classes = useStyles();

  return (
    <Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>

          

            <Grid key={1} item xs={2}>

            <FilterPanel parentCallback={callbackFilter}/>  
            </Grid>

            <Grid key={2} item xs={10}>
              <Paper className={classes.paper} >
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                ><Selects parentCallback={callbackSelect}/>
                </Grid>

                <ImgMediaCard offset={offset} selectedSortItem={selectedSortItem}
                
                checkedFilterItems={checkedFilterItems}
                />

              </Paper>

              <Paper className={classes.paper} style={{display:'flex',justifyContent: 'center'}}>
                <FlatPagination parentCallback={callback}/>
              
              </Paper>
            </Grid>

          </Grid>
        </Grid>
      </Grid>

      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>

            <Grid key={1} item xs={2}>
              <div></div>
            </Grid>

            <Grid key={2} item xs={10}>
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
