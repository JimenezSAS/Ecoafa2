import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <header className='bg-gray-200 '>
       <div className='flex justify-between '>
        <div className='p-4'>
            <h1>Logo</h1>
        </div>
       </div>
       <div className='flex relative justify-end-safe gap-2 p-8 '>
         
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link>Services</Link>
        
       </div>
    </header>
  
    
    </div>
  ) 
}

export default Header
