import React from 'react'
import Logo from "../assets/airbnb-logo.png"


const Nav = () => {
  return (
    <div className='w-full h-[70px]'>
        <div className='w-full h-full flex px-[30px]  nav'>
            <div className='flex items-center' >
               <img src={Logo} alt="airbnb logo" className='h-[30px]' />
            </div>
        </div>
    </div>
  )
}

export default Nav