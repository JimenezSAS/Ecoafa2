import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header';
import Layout from './Components/Header/Layout';
import Proyectos from './Components/Header/Proyectos/Proyectos';
import { Routes, Route, Router } from 'react-router-dom'

function App() {
  

  return (
    
     
      <Routes>
       <Route path='/' element= {<Layout/>}>
         
         <Route index element={<Header/>}/>
       </Route>
       <Route path='/proyectos' element= {<Proyectos/>}/>
      </Routes>

     
   
     
    
  
    
    
  ) 
}

export default App
