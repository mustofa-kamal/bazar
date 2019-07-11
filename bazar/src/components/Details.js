import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:"500px"
  },

  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:"50px"
  },
}));

export default function Details() {

  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";
 }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={5}>
          sfsdfsfsfsf

        </Grid>
        <Grid item xs={4}>
aaaadad

        </Grid>
        <Grid item xs={3}>
aadadda

        </Grid>
       
      </Grid>
    </div>
  );
}
