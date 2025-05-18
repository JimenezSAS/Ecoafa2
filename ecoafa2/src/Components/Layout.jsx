import React from 'react'
import Header from './Header/Header.jsx'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>

       <Header/>
       <div className='h-24 '></div>
        <Outlet/>
      
    </>
  )
}

export default Layout
