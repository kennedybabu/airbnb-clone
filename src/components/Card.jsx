import React from 'react'
import {AiFillStar} from "react-icons/ai"


const Card = (props) => {
    let badgeText
    if(props.card.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.card.location === 'Online') {
        badgeText ="ONLINE"
    }

    // console.log(props)
  return (
    <div className='h-[328px] w-[176px] min-w-[176px] mt-[50px] mx-[36px]'>
        {/* container */}
        <div className='relative w-full h-full text-[#222222]'>
            {badgeText ? <div className='absolute bg-white ml-1 mt-1 rounded-md p-1'>{badgeText ? `${badgeText}` : null}</div>: null}

            <div className='h-[235px] rounded-[9px]'>                
                <img src={`../public/images/${props.card.coverImg}`} alt="" />
                {props.card.coverImg}
            </div>
            <div className='font-[300] mt-[9px] text-[12px]'>
                <div className='flex items-center'>
                    <AiFillStar className='mr-1 text-[#FE395C]'/> <p className='text-[#918E9B]'><span className='text-black'>{props.card.stats.rating}</span> ({props.card.stats.reviewCount}).{props.card.location}</p>
                </div>
                <p>{props.card.title}</p>
                <p><span className='text-black font-bold'>From ${props.card.price}</span>/ person</p>
            </div>
        </div>
    </div>
  )
}

export default Card