import { useState } from 'react'


import Layout from './Components/Header/Layout';
import Proyectos from './Components/Header/Proyectos/Proyectos';
import { Routes, Route, Router } from 'react-router-dom'
import Nosotros from './Components/Header/Nosotros/Nosotros';
import Contacto from './Components/Header/Contacto/Contacto';
import Body from './Components/Body/Body';


function App() {
  

  return (
    
     
      <Routes>
       <Route path='/' element= {<Layout/>}>
         <Route path='/proyectos' element={<Proyectos/>}/>
         <Route path='/nosotros' element={<Nosotros/>}/> 
         <Route path='/contacto' element={<Contacto/>}/>
         <Route path='/' element={<Body/>}/>
       </Route>
      
      </Routes>

     
   
     
    
  
    
    
  ) 
}

export default App
