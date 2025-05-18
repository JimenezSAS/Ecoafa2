import { useState } from 'react'



import Layout from './Components/Layout';
import Proyectos from './Components/Header/Proyectos/Proyectos';
import { Routes, Route, Router } from 'react-router-dom'

function App() {
  

  return (
    
     
      <Routes>
       <Route path='/' element= {<Layout/>}>
         <Route path='/proyectos' element={<Proyectos/>}/>
       </Route>
      
      </Routes>

     
   
     
    
  
    
    
  ) 
}

export default App
