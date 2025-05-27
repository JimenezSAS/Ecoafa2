import React from 'react'
import Header from './Header/Header.jsx'
import { Outlet } from 'react-router-dom'

import Footer from './Footer/Footer.jsx'
const Layout = () => {
  return (
    <>

       <Header/>
       <div className='h-24 '></div>
        <Outlet/>
        

        <Footer/>
      
    </>
  )
}

export default Layout
