import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';






const useStyles = makeStyles(theme => ({
  root: {

    padding: theme.spacing(1, 1),
    padding:"2px 8px"
  },
}));

export default function Headers() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} square={true}>
       
        <Typography component="p" color="primary">
          Activewear Store icon
        </Typography>
      </Paper>
    </div>
  );
}
