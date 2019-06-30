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




const FilterPanel = ({parentCallback}) => {
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
    checkedXXXL: false


  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    parentCallback({ ...state, [name]: event.target.checked });


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

  
    return (
    <FormControl component="fieldset">
          <FormLabel component="legend">Sizes</FormLabel>
        
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox checked={state.checkedXS}
               onChange={handleChange('checkedXS')}
               value="checkedA" />
            }
            label="XS"
          />
    
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedS}
                onChange={handleChange('checkedS')}
                value="checkedS"
                color="primary"
              />
            }
            label="S"
          />

<FormControlLabel
            control={
              <Checkbox
                checked={state.checkedM}
                onChange={handleChange('checkedM')}
                value="checkedM"
                color="primary"
              />
            }
            label="M"
          />

<FormControlLabel
            control={
              <Checkbox
                checked={state.checkedL}
                onChange={handleChange('checkedL')}
                value="checkedl"
                color="primary"
              />
            }
            label="L"
          />

<FormControlLabel
            control={
              <Checkbox
                checked={state.checkedXL}
                onChange={handleChange('checkedXL')}
                value="checkedXL"
                color="primary"
              />
            }
            label="XL"
          />

<FormControlLabel
            control={
              <Checkbox
                checked={state.checkedXXL}
                onChange={handleChange('checkedXXL')}
                value="checkedXXL"
                color="primary"
              />
            }
            label="XXL"
          />


<FormControlLabel
            control={
              <Checkbox
                checked={state.checkedXXXL}
                onChange={handleChange('checkedXXXL')}
                value="checkedXXXL"
                color="primary"
              />
            }
            label="XXXL"
          />


         
          
          
        </FormGroup>
        </FormControl>
        
    )


    

  
  
  }

  
       
  

 
    
  
    

   





export default FilterPanel;




  






  

  


 
      

  



  
  

