// import React, { Fragment } from 'react'
// import image1 from '../assets/image1.avif'
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { useDispatch } from 'react-redux';
// import { RemoveItem } from '../redux/cartSlice';

// const SidebarCard = ({name, id, price, image, qty}) => {
//     let dispatch = useDispatch()

//   return (
//     <Fragment>
//       <div className='w-full h-[120px] shadow-lg p-2 flex justify-between'>
//         <div className='w-[60%] h-full flex gap-5'>

//             <div className='w-[60%] h-full overflow-hidden rounded-lg'>
//                 <img src={image} alt="" className='object-cover'/>
//             </div>

//             <div className='w-[40%] h-full flex flex-col gap-3'>
//                 <div className='text-lg text-gray-600 font-semibold'>
//                     {name}
//                 </div>

//                 <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl'>
//                     <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200'>-</button>
//                     <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400'>{qty}</span>
//                     <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200'>+</button>
//                 </div>
//             </div>

//         </div>

//         <div className='flex flex-col justify-start items-end gap-6'>
//             <span className='text-xl text-green-400 font-semibold'>Rs {price} /-</span>
//             <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-400 cursor-pointer'
//             onClick={()=>dispatch(RemoveItem(id))}/>
//         </div>

//       </div>
//     </Fragment>
//   )
// }

// export default SidebarCard



import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../redux/cartSlice';

const SidebarCard = ({ name, id, price, image, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex items-center justify-between p-4 rounded-xl shadow-md hover:shadow-lg transition bg-white">
        {/* Left: Image + Info */}
        <div className="flex gap-4 items-center w-[70%]">
            
            {/* Image */}
            <div className="w-[70px] h-[70px] rounded-lg overflow-hidden flex-shrink-0 border border-green-100">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2 w-full">
                <span className="font-semibold text-gray-800 text-sm md:text-base">{name}</span>

                {/* Quantity Controller */}
                <div className="flex w-[110px] h-[40px] rounded-full border border-green-400 shadow overflow-hidden font-semibold text-green-600 text-sm md:text-base">
                    <button className="w-[30%] bg-white hover:bg-green-100 flex justify-center items-center">-</button>
                    <div className="w-[40%] bg-gray-100 flex justify-center items-center">{qty}</div>
                    <button className="w-[30%] bg-white hover:bg-green-100 flex justify-center items-center">+</button>
                </div>
            </div>
        </div>

        {/* Right: Price + Delete */}
        <div className="flex flex-col items-end justify-between h-[70px]">
            <span className="text-green-500 font-bold text-sm md:text-base">Rs {price} /-</span>
            <RiDeleteBin6Line className="w-5 h-5 text-red-400 hover:text-red-600 cursor-pointer transition"
            onClick={() => dispatch(RemoveItem(id))}/>
        </div>
    </div>
  );
};

export default SidebarCard;
