import React, { Fragment,Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import Explore from './components/Explore'
import SpotLightList from './components/SpotLightList'
import Category from './components/Category'
import { Switch, Route, Router } from 'react-router-dom';
import Clothing from './components/Clothing'
import Home from './components/Home'





  





function App() {
  return (
   

    <Fragment> 
    
      <Category /> 
      <Route exact path="/" component={Home}/>  
      <Route path="/menClothing" component={()=><Clothing />}/> 
      

      <SpotLightList /> 
   
   </Fragment>



   
  );
}

export default App;
