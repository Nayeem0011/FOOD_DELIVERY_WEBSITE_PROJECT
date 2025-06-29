import React, { Fragment } from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";


const Navber = () => {
  return (
    <Fragment>
        <div className='w-full h-[100px] flex justify-between items-center px-8'>

            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <IoFastFoodOutline className='w-[30px] h-[30px] text-green-500'/>
            </div>
            
            <form className='w-[60%] h-[60px] bg-white flex items-center px-5 gap-2 rounded-md'>
                <IoMdSearch className='text-green-500 w-[20px] h-[20px]'/>
                <input type="text" placeholder='Search Items...' className='w-[100%] outline-none text-[20px]'/>
            </form>

            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
                <span className='absolute top-0 right-2 text-green-500 font-bold text-[17px]'>0</span>
                <GiShoppingCart className='w-[30px] h-[30px] text-green-500'/>
            </div>

        </div>
    </Fragment>
  )
}

export default Navber
