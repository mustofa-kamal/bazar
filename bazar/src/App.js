import React, { Fragment,Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import Explore from './components/Explore'
import SpotLightList from './components/SpotLightList'
import Category from './components/Category'
import { Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
   /*  <Fragment>
     <PrimarySearchAppBar/>
     <MyComponent />
    </Fragment> */

    <Fragment>
       <PrimarySearchAppBar/>
       
       <Category/>
       <SpotLightList/>
    </Fragment>

   
  );
}

export default App;
