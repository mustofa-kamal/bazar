import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Paper from '@material-ui/core/Paper';




import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";




const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 0),
  },
}));



export default function ImageMediaCard() {
  const classes = useStyles();

  return (

    <Paper className={classes.root}>

<Typography variant="h5" component="h3" gutterBottom align="center">
          title of the shirt
        </Typography>
      


     







   



<SideBySideMagnifier
  imageSrc="http://localhost:3000/ck-shirt20.jpg"
  imageAlt="Example"
 />

<Typography component="p" align="center">
          Paper can be used to build surface or other elements for your application.
        </Typography>



</Paper>


  






      

        
      
      
  );
}
