import React from 'react'
import { food_items } from '../food'
import ContaintCard from './ContaintCard'

const ContaintList = () => {

  return (
    <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
      {food_items.map((item)=>(
        <ContaintCard 
        name={item.food_name}
        image={item.food_image}
        price={item.price}
        id={item.id}
        type={item.food_type}/>
      ))}
    </div>
  )
}

export default ContaintList
