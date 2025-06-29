import React, { Fragment } from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";


const Navber = () => {
  return (
    <Fragment>
        <div className="w-full h-[100px] flex justify-between items-center px-6 md:px-10 shadow-md bg-gradient-to-r from-white via-green-50 to-white">

            {/* Logo Section */}
            <div className="flex items-center gap-3">
                <div className="w-[60px] h-[60px] bg-white shadow-lg rounded-full flex justify-center items-center border border-green-100">
                    <IoFastFoodOutline className="w-[28px] h-[28px] text-green-500" />
               </div>
                <h1 className="text-2xl font-bold text-green-600 hidden sm:block">Foodie</h1>
           </div>

            {/* Search Box */}
            <form className="w-[60%] max-w-[500px] h-[55px] bg-white border border-green-100 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center px-4 gap-3 rounded-full">
                <IoMdSearch className="text-green-500 w-[22px] h-[22px]" />
                <input type="text" placeholder="Search delicious food..." className="w-full outline-none text-[18px] placeholder:text-gray-400"/>
           </form>

           {/* Cart */}
           <div className="relative">
            <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-full shadow-lg border border-green-100">
                <GiShoppingCart className="w-[28px] h-[28px] text-green-500" />
           </div>
           <span className="absolute -top-1 -right-1 bg-green-500 text-white text-sm w-[20px] h-[20px] flex justify-center items-center rounded-full font-semibold">0</span>
         </div>

    </div>
    </Fragment>
  ) 
}

export default Navber
