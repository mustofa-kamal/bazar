import React, { Fragment,Component } from 'react';
import logo from './logo.svg';

/* import './App.css';
 */
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import Explore from './components/Explore'
import Category from './components/Category'
import Clothing from './components/Clothing'
import Home from './components/Home'



import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink, BrowserRouter } from "react-router-dom";
import { Route, BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import Footer from './components/Footer';






function Layout(props) {
  return (
    <Fragment>
      <PrimarySearchAppBar/> 
        <SimpleBreadcrumbs/>
        <br/>
        {props.children}
        <br/>
      
      
      <Footer/>
    </Fragment>
  );
}




  
function SimpleBreadcrumbs() {
  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split("/").filter(x => x);
        console.log(location.pathname+":   "+pathnames)
        return (
          <Breadcrumbs aria-label="Breadcrumb">
            <RouterLink color="inherit" to="/">
              Home
            </RouterLink>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography color="textPrimary" key={to}>
                  {value}
                </Typography>
              ) : (
                <RouterLink color="inherit" to={to} key={to}>
                  {value}
                </RouterLink>
              );
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
}




function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Home}/>
        <Route path="/menClothing"   component={()=><Clothing gender="men" />}/>
        <Route path="/womenClothing" component={()=><Clothing gender="women" />}/>  
      </Layout>
   </BrowserRouter>
  );
}
export default App;
