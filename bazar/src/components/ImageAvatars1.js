import React, {useState, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { deepOrange, deepPurple } from '@material-ui/core/colors';


const useStyles = makeStyles({
  avatar: {
    margin: 10,
    backgroundColor: deepOrange[500],

   
  },

  root: {
    padding: 1,
    borderRadius:4,
    border: "1px solid gray",
    margin:3

   
  },

 
  
});





const ImageAvatars = (props) => {


  const classes = useStyles();


  const [tck, setTck] = useState("");






  const {parentCallback} = props;

  const {allsrces} = props;




  const thumpnailClick = (e, someParameter) => {
    console.log('Click');
    parentCallback(e.target.src);

    const listItems = e.target.parentNode.parentNode.children;
    const listArray = Array.from(listItems);
    listArray.forEach((item) => {
          item.style.border='1px solid gray'
    }  
  )


    e.target.parentNode.style.border='1px solid red'

    let t = ticket(someParameter.size);

    setTck(t);

  }




  const ticket =  function(items){
  
    const c = items.map((item, key) =>
         <div>{item}</div>
    )

    return c;
}




  
  
 
  const items = allsrces.map((item, key) =>
  {if(key===0){
    return <Avatar   style={{cursor: 'pointer', border: "1px solid red"}} onClick={(e) => thumpnailClick(e, item)} className={classes.root} src={item.src} key={item}/>
  } else {
    return <Avatar  onClick={(e) => thumpnailClick(e, item)} style={{cursor: 'pointer'}}  className={classes.root} src={item.src} key={item}/>

  }
}


    );

  return (
    <Fragment>

    <Grid container justify="center" alignItems="center">
    {tck}
  </Grid>

    <Grid container justify="center" alignItems="center">
      {items}
    </Grid>

   </Fragment>



  );
}


export default ImageAvatars;
