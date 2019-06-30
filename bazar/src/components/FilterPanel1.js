import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';


import CheckboxControls from './CheckboxControls'

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';








const useStyles = makeStyles({

  u: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
    }
    
  

  
  
});



const Filters = (props) => {
  const classes = useStyles();

  return (

    <Fragment>
    
{props.filters.size.map((size, i) =>

  <div  key={i}>{size}</div>

)}


{props.filters.material.map((material, i) =>

  <div>{material}</div>

)}

<CheckboxControls/>


   

    </Fragment>

    
  )

}




const FilterPanel = (props) => {
  const [hasError, setErrors] = useState(false);
  const [filters, setFilters  ] = useState(null);


const [state, setState] = React.useState({
    checkedXS: false,
    checkedS: false,
    checkedM: false,
    
    checkedL: false,
    checkedXL: false,
    checkedXXL: false,
    checkedXXL: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };


  

  async function fetchData() {
    let respose = await fetch("http://localhost:3001/filters");
    respose
      .json()
      .then(respose => setFilters(respose))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData()
  }, [])

  


  

   
     
    
    
    
   /*  {if (filters){
      return  <Filters filters={filters} />
      
    } else{
        return <></>
    }
  } */

  {if (filters){
    return (
    <FormControl component="fieldset">
          <FormLabel component="legend">Size</FormLabel>
        
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox checked={state.checkedA}
               onChange={handleChange('checkedA')}
               value="checkedA" />
            }
            label="ES"
          />
    
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="primary"
              />
            }
            label="S"
          />
          <FormControlLabel control={<Checkbox value="checkedC" />} label="M" />
          <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />
          <FormControlLabel disabled control={<Checkbox checked value="checkedE" />} label="Disabled" />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedF}
                onChange={handleChange('checkedF')}
                value="checkedF"
                indeterminate
              />
            }
            label="Indeterminate"
          />
          
          
        </FormGroup>
        </FormControl>
        
    )} else{
        return (<></>)
    }


    

  
  
  }
}
  
       
  

 
    
  
    

   





export default FilterPanel;




  






  

  


 
      

  



  
  

