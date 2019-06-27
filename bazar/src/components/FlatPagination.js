import React, {useState} from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
 
const theme = createMuiTheme();
 



const FlatPagination = ({ parentCallback }) => {

const [offset, setOffset ] = useState(0);


 
 
  const handleClick = (offset)=>  {
    setOffset(offset);
    parentCallback(offset);
  }
  
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={10}
          offset={offset}
          total={100}
          onClick={(e, offset) => handleClick(offset)}
        />
      </MuiThemeProvider>
    );
  }


export default FlatPagination;