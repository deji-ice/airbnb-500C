import React from 'react'
import { airbnbData } from '../assets/data'
import Card from './Card'

const Cards = () => {
  return (
    <div className='grid grid-cols-4 gap-5 px-8 mt-10'>
    
            <Card data={airbnbData}/>
       
    </div>
  )
}

export default Cards