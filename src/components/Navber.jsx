// import React, { Fragment, useContext, useEffect } from 'react';
// import { IoFastFoodOutline } from "react-icons/io5";
// import { IoMdSearch } from "react-icons/io";
// import { GiShoppingCart } from "react-icons/gi";
// import { dataContext } from '../context/UserContext';
// import { food_items } from '../food';
// import { useSelector } from 'react-redux';
// import { FaUserPlus, FaSignInAlt } from 'react-icons/fa'; // signup/login icons

// const Navber = () => {
//   const {input, setInput, category, setCategory, showCard, setShowCard} = useContext(dataContext)

//   useEffect(()=>{
//     const newList=food_items.filter((item)=>item.food_name.
//     includes(input)||item.food_name.toLowerCase().includes(input))
//     setCategory(newList)
//   },[input])

//   // useEffect(() => {
//   //   const newList = food_items.filter((item) =>
//   //     item.food_name.toLowerCase().includes(input.toLowerCase())
//   //   );
//   //   setCategory(newList);
//   // }, [input]);

//   // useEffect(() => {
//   //   const newList = food_items.filter(item =>
//   //     item.food_name.toLowerCase().includes(input.toLowerCase()));
//   //     setCategory(newList);
//   // }, [input]);

//     const items = useSelector(state=>state.cart)

//   return (
//     <Fragment>
//         <div className="w-full h-[100px] flex justify-between items-center px-6 md:px-10 shadow-md bg-gradient-to-r from-white via-green-50 to-white">

//             {/* Logo Section */}
//             <div className="flex items-center gap-3">
//                 <div className="w-[60px] h-[60px] bg-white shadow-lg rounded-full flex justify-center items-center border border-green-100 cursor-pointer">
//                     <IoFastFoodOutline className="w-[28px] h-[28px] text-green-500" />
//                </div>
//                 <h1 className="text-2xl font-bold text-green-600 hidden sm:block">Foodie</h1>
//             </div>

//              {/* Search Box */}
//             <form className="w-[60%] max-w-[500px] h-[55px] bg-white border border-green-100 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center px-4 gap-3 rounded-full"
//                   onSubmit={(e)=>e.preventDefault()}>
//                   <IoMdSearch className="text-green-500 w-[22px] h-[22px]" />
//                   <input 
//                   type="text" 
//                   placeholder="Search delicious food..." 
//                   className="w-full outline-none text-[18px] placeholder:text-gray-400"
//                   onChange={(e)=>setInput(e.target.value)} value={input}/>
//             </form>

            

//              {/* Cart */}
//             <div className="relative"onClick={()=>{
//               setShowCard(true)
//               }}>
//                 <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-full shadow-lg border border-green-100 cursor-pointer">
//                   <GiShoppingCart className="w-[28px] h-[28px] text-green-500" />
//                 </div>
//                 <span className="absolute -top-1 -right-1 bg-green-500 text-white text-sm w-[20px] h-[20px] flex justify-center items-center rounded-full font-semibold">{items.length}</span>
//             </div>
//         </div>
//     </Fragment>
//   ) 
// }

// export default Navber





import React, { Fragment, useContext, useEffect } from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';
import NavberLoginSignUP from './NavberLoginSignUP';

const Navber = () => {
  const { input, setInput, category, setCategory, showCard, setShowCard } = useContext(dataContext);

  useEffect(() => {
    const newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCategory(newList);
  }, [input]);

  const items = useSelector(state => state.cart);

  return (
    <Fragment>
      <div className="w-full h-[100px] flex justify-between items-center px-4 md:px-10 shadow-md bg-gradient-to-r from-white via-green-50 to-white">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-[60px] h-[60px] bg-white shadow-lg rounded-full flex justify-center items-center border border-green-100 cursor-pointer">
            <IoFastFoodOutline className="w-[28px] h-[28px] text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-green-600 hidden sm:block">Foodie</h1>
        </div>

         {/* Search Box */}
        <form
          className="w-[50%] max-w-[500px] h-[55px] bg-white border border-green-100 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center px-4 gap-3 rounded-full"
          onSubmit={(e) => e.preventDefault()}>
          <IoMdSearch className="text-green-500 w-[22px] h-[22px]" />
          <input
            type="text"
            placeholder="Search delicious food..."
            className="w-full outline-none text-[18px] placeholder:text-gray-400"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>

         {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Login / Signup / File*/}
          <NavberLoginSignUP/>

          {/* Cart */}
          <div className="relative" onClick={() => setShowCard(true)}>
            <div className="w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full shadow-lg border border-green-100 cursor-pointer">
              <GiShoppingCart className="w-[24px] h-[24px] text-green-500" />
            </div>
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-[18px] h-[18px] flex justify-center items-center rounded-full font-semibold">
              {items.length}
            </span>
          </div>

        </div>
      </div>
    </Fragment>
  );
};

export default Navber;

