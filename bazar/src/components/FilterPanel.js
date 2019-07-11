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








const FilterPanel = ({parentCallback}) => {

  const [hasError, setErrors] = useState(false);
  const [filters, setFilters  ] = useState(null);
 

  //"XS=false&S=false&M=false&L=true&XL=false&XXL=false&XXXL=false"

const [state, setState] = React.useState({
    XS: false,
    S: false,
    M: false,
    
    L: false,
    XL: false,
    XXL: false,
    XXL: false,
    XXXL: false,

    RL:false, 
    NIKE:false,
    UA:false,

    activewear:false




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

  


  

   
     
    
    
    
  

  
    return (
      <Fragment>



<FormControl component="fieldset">
          <FormLabel component="legend">ActiveWear</FormLabel>
        
        <FormGroup column>
          <FormControlLabel
            control={
              <Checkbox checked={state.activewear}
               onChange={handleChange('activewear')}
               value="activewear" />
            }
            label="Activewear"
          />
    
          



</FormGroup>
        </FormControl>



<br/><br/>


<FormControl component="fieldset">




          <FormLabel component="legend">SIZES</FormLabel>
        
        <FormGroup column>
          <FormControlLabel
            control={
              <Checkbox checked={state.XS}
               onChange={handleChange('XS')}
               value="XS" />
               
            }
            label="XS"
          />
    
          <FormControlLabel
            control={
              <Checkbox
                checked={state.S}
                onChange={handleChange('S')}
                value="S"
                color="primary"
              />
            }
            label="S"
          />

<FormControlLabel
            control={
              <Checkbox
                checked={state.M}
                onChange={handleChange('M')}
                value="M"
                color="primary"
              />
            }
            label="M"
          />

<FormControlLabel
            control={
              <Checkbox
                checked={state.L}
                onChange={handleChange('L')}
                value="L"
                color="primary"
              />
            }
            label="L"
          />

<FormControlLabel
            control={
              <Checkbox
                checked={state.XL}
                onChange={handleChange('XL')}
                value="XL"
                color="primary"
              />
            }
            label="XL"
          />

<FormControlLabel
            control={
              <Checkbox
                checked={state.XXL}
                onChange={handleChange('XXL')}
                value="XXL"
                color="primary"
              />
            }
            label="XXL"
          />


<FormControlLabel
            control={
              <Checkbox
                checked={state.XXXL}
                onChange={handleChange('XXXL')}
                value="XXXL"
                color="primary"
              />
            }
            label="XXXL"
          />


         
          
          
        </FormGroup>
        </FormControl>


            <br/><br/>

    <FormControl component="fieldset">
          <FormLabel component="legend">BRANDS</FormLabel>
        
        <FormGroup column>
          <FormControlLabel
            control={
              <Checkbox checked={state.RL}
               onChange={handleChange('RL')}
               value="RL" />
            }
            label="RL"
          />
    
          <FormControlLabel
            control={
              <Checkbox
                checked={state.NIKE}
                onChange={handleChange('NIKE')}
                value="NIKE"
                color="primary"
              />
            }
            label="NIKE"
          />

<FormControlLabel
            control={
              <Checkbox
                checked={state.UA}
                onChange={handleChange('UA')}
                value="UA"
                color="primary"
              />
            }
            label="UA"
          />

</FormGroup>
        </FormControl>



<br/><br/>

<FormControl component="fieldset">
          <FormLabel component="legend">MATERIAL</FormLabel>
        
        <FormGroup column>
          <FormControlLabel
            control={
              <Checkbox checked={state.Polyester}
               onChange={handleChange('Polyester')}
               value="Polyester" />
            }
            label="Polyester"
          />
    
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Cotton}
                onChange={handleChange('Cotton')}
                value="Cotton"
                color="primary"
              />
            }
            label="Cotton"
          />

<FormControlLabel
            control={
              <Checkbox
                checked={state.Lilen}
                onChange={handleChange('Lilen')}
                value="Lilen"
                color="primary"
              />
            }
            label="Lilen"
          />




         
          
          
       

       </FormGroup>
       </FormControl>
       </Fragment>

        
    )


    

  
  
  }

  
       
  

 
    
  
    

   





export default FilterPanel;




  






  

  


 
      

  



  
  

