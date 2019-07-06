import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import clsx from 'clsx';


import { Link, NavLink } from 'react-router-dom'



const useStyles = makeStyles(theme => ({
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


  fab: {
    margin: theme.spacing(3,1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

  circle :{
    maxWidth: '120px', 
    maxHeight: '120px', 
    minWidth: '120px', 
    minHeight: '120px'
  }


}));

function Category() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  function handleChange(event, value) {
    setSpacing(Number(value));
  }

  return (
    <Fragment>
   
    <Grid container className={classes.root} spacing={2} >
   
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid key={1} item>
              <Fab component={Link} to="/man" variant="round" size="large" color="primary" aria-label="Add" className={clsx(classes.fab, classes.circle)}>
                   Men Clothing
                  <AddIcon />
              </Fab>
          </Grid>

          <Grid key={2} item>
            <Fab  component={Link} to="/woman" variant="round" size="large" color="primary" aria-label="Add" className={clsx(classes.fab, classes.circle)}>
               Woman Clothing
              <AddIcon />
            </Fab>
          </Grid>

          <Grid key={2} item>
            <Fab variant="round" size="large" color="primary" aria-label="Add" className={clsx(classes.fab, classes.circle)}>
              Kids Clothing
              <AddIcon />
            </Fab>
          </Grid>

          <Grid key={2} item>
            <Fab variant="round" size="large" color="primary" aria-label="Add" className={clsx(classes.fab, classes.circle)}>
              Under 200 TK
              <AddIcon />
            </Fab>
          </Grid>

          <Grid key={2} item>
            <Fab variant="round" size="large" color="primary" aria-label="Add" className={clsx(classes.fab, classes.circle)}>
              Under 400 TK
              <AddIcon />
            </Fab>
          </Grid>

          <Grid key={2} item>
            <Fab variant="round" size="large" color="primary" aria-label="Add" className={clsx(classes.fab, classes.circle)}>
              Above 500 TK
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Fragment>
  );
}

export default Category;
