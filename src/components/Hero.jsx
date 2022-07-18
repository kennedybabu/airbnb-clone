import React from 'react'
import Images from "../assets/photo-grid.png"

const Hero = () => {
  return (
    <div className='w-full  px-[36px] py-[26px]'>
        {/* container */}
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-[366px] h-[232px] max-w-[400px]'>
                <img src={Images} alt="hero photo grid" className='h-full w-full'/>
            </div>          
        </div>  
        <div className='md:px-[100px]'>
          <h1 className='text-[36px] font-bold'>Online Experiences</h1>
          <p className='text-[16px] text-[#222222] max-w-[320px]'>Join unique interactive activities led by one-of-kind hosts-all without leaving home.</p></div>      
        </div>
  )
}

export default Hero