import React from 'react'
import { airbnbData } from '../assets/data'
import Card from './Card'

const Cards = () => {
  return (
    <div className='grid grid-cols-4 gap-5 px-8 mt-10 relative'>
    
            <Card data={airbnbData}/>

            <button className='bg-gray-900 rounded-full text-white px-4 py-2 flex items-center justify-center 
            fixed bottom-6 text-center '>Show Map</button>
       
    </div>
  )
}

export default Cards