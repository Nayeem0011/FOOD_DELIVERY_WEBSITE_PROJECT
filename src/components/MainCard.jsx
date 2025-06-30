import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';

const MainCard = ({ name, image, id, price, type }) => {
  let dispatch = useDispatch()

  return (
    <div className="w-[280px] h-[420px] bg-white rounded-2xl shadow-xl border border-transparent hover:border-green-400 transition-all duration-300 group hover:shadow-green-100 overflow-hidden relative">
          
          {/* Product Image */}
          <div className="w-full h-[60%] overflow-hidden rounded-t-2xl">
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
          </div>
    
          {/* Product Info */}
          <div className="px-4 py-3 flex flex-col justify-between h-[40%]">
    
            {/* Name */}
            <h2 className="text-xl font-bold text-gray-800 line-clamp-1">{name}</h2>
    
            {/* Price & Type */}
            <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-green-600">Rs {price} /-</span>
                <span className="flex items-center gap-2 text-green-600 font-semibold">
                    {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
                <span className="capitalize">{type}</span>
               </span>
            </div>
    
           {/* Button */}
            <button className="mt-4 w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-500 hover:text-gray-100 transition duration-300 shadow-md hover:shadow-lg"
            onClick={()=>dispatch(AddItem({id:id, name:name, price:price, image:image, qty:1}))}>
              Add to Dish
            </button>
           </div>
    </div>
  )
}

export default MainCard
