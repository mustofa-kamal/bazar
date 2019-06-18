import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FooterList from './FooterList';





const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItemText:{
    fontSize:'0.7em',//Insert your required size
  }
});


export default function Footer() {

  const flexContainer = {
    display: 'flex',flexDirection: 'row', padding: 0
   

  };


  const [spacing, setSpacing] = React.useState(2);
  

  function handleChange(event, value) {
    setSpacing(Number(value));
  }

  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '10vh', borderTop: '1px solid #cccccc', background:"#FFFFFF"}}
      >

        <Grid item xs={8} >

         <FooterList/>
          
        </Grid>

      </Grid>


    </React.Fragment>
  );
}
