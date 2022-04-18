import React from 'react'
import {Routes ,  Route } from 'react-router-dom';

// components Import
import NavBar from './components/Nav'

// pages Import
import Home from './pages/Home';
import About from './pages/About';
import Single from './pages/Single';
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='details/:id' element={<Single/>}/>
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </React.Fragment>
   
  );
}

export default App;
