import React from 'react';
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


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },




  flexcontainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }


}));

function Clothing() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3} style={{ padding: "25px" }}>
          <Grid container style={{ padding: 0 }}>
            <Grid item xs={12} style={{ padding: 0 }}>

              Add the menu here sdfsdfd sdf fs fsfsf sdf f fs d
           <br />
              dadad
           <br />
              adda

          </Grid>


          </Grid>
        </Grid>



        <Grid item xs={9} style={{ padding: 0 }}>
          <Paper className={classes.paper}>

            <Grid container spacing={1}>
              <Grid item xs={12} spacing={1}>
                <Grid container >
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="center"
                    >







                      <Selects />










                      {[0, 1, 2].map(value => (


                        <List className={classes.root}>
                          <ListItem key={value} alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                              primary="Brunch this weekend?"
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                  >
                                    Ali Connors
              </Typography>
                                  {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                          <Divider variant="inset" component="li" />
                          <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                              primary="Summer BBQ"
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                  >
                                    to Scott, Alex, Jennifer
              </Typography>
                                  {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                          <Divider variant="inset" component="li" />
                          <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                              primary="Oui Oui"
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                  >
                                    Sandra Adams
              </Typography>
                                  {' — Do you have Paris recommendations? DddaD adaNDd aD ad ad d d ad ad a da Da da D ad aD A da Da d Da da d d aDAD Have you ever…'}
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                        </List>
                      ))}



                    </Grid>
                  </Grid>
                </Grid>
              </Grid>


            </Grid>


          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>

      </Grid>
    </div>
  );
}





export default Clothing;
