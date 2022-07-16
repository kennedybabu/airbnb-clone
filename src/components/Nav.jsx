import React from 'react'
import {SiAirbnb} from "react-icons/si"


const Nav = () => {
  return (
    <div className='w-full h-[70px]'>
        <div className='w-full h-full flex px-[30px] text-[#FF5A5F] nav'>
            <div className='flex items-center' >
                <SiAirbnb  className='text-[25px] mr-3'/>
                <p className='text-xl font-bold'>airbnb</p>
            </div>
        </div>
    </div>
  )
}

export default Nav