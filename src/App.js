// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
// import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';

function App() {
  // Set state values

  return (
    <div className="App">
      {/* <Navbar  /> */}
      
      <Footer />
    </div>
  );
}

export default App;
