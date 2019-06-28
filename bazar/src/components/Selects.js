import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Grid from '@material-ui/core/Grid';







const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1,1,1,0),
  }
}));



export default function FadeMenu({parentCallback}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const options = [
    'price',
    'size',
    'material',
    'brand'
  ];

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    console.log(options[index])
    parentCallback(options[index]);
    setAnchorEl(null);
  }


  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>

    <Grid container direction="row" alignItems="center">
      <Grid item>
       sort:
      </Grid>
      <Grid item>
      <Button variant="outlined" size="small" className={classes.button} onMouseOver={handleClick}>
        {options[selectedIndex]}
        <ArrowDropDownIcon />
      </Button>
      </Grid>
    </Grid>

      
  


      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
