import React, { Fragment, useContext } from 'react'
import Navber from '../components/Navber'
import Categories from '../Categories'
import MainCard from '../components/MainCard'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import SidebarCard from '../components/SidebarCard'
import { useSelector } from 'react-redux'

const Homepage = () => {
  let { category, setCategory, input, showCard, setShowCard } = useContext(dataContext)


  function filter(selectedCategory){
    if(selectedCategory==="All"){
      setCategory(food_items)
    }else{
      let newList = food_items.filter((item)=>(item.food_category===selectedCategory))
      setCategory(newList)
    }
  }

  let items = useSelector(state=>state.cart)

  let sumTotal = items.reduce((total, item)=>total+item.price,0)
  let deliveryFee=20;
  let taxes=sumTotal*0.5/100;
  let total = Math.floor(sumTotal+deliveryFee+taxes)

  return (
    <Fragment>
      <div className='bg-slate-200 w-full min-h-screen'>
        <Navber/>

        <div className="min-h-screen bg-white">

          {!input?
          <div className="w-full flex flex-wrap justify-center gap-6 px-4 py-6">
            {Categories.map((item)=>{

              return <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 shadow hover:shadow-md hover:bg-green-100 transition cursor-pointer duration-400"
              onClick={()=>filter(item.name)}>
                {item.icon}

                <span  className="text-sm text-gray-700 font-bold">
                  {item.name}
                </span>

                </div>
            })}
          </div>:null}


        <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
          {category.map((item)=>(
            <MainCard
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}/>
           ))}
        </div>
        

        {/* <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto
          ${showCard?"translate-x-0":"translate-x-full"}`}>
          <header className='w-[100%] flex justify-between items-center'>

            <span className='text-green-500 text-[19px] font-semibold'>
              Order items
            </span>
            <RxCross2 className='w-[25px] h-[25px] text-green-500 text-[18px] font-semibold cursor-pointer hover:text-gray-600' 
            onClick={()=>setShowCard(false)}/>

          </header>
          
        <div className='w-full mt-9 flex flex-col gap-8'>
          {items.map((item)=>(
            <SidebarCard 
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
            qty={item.qty}/>
          ))}
        </div>

        <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Sumtotal</span>
            <span className='text-green-400 font-semibold text-lg'>Rs = {sumTotal} /-</span>
          </div>

          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
            <span className='text-green-400 font-semibold text-lg'>Rs = {deliveryFee} /-</span>
          </div>

          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
            <span className='text-green-400 font-semibold text-lg'>Rs = {taxes} /-</span>
          </div>
        </div>

        <div>
          <div className='w-full flex justify-between items-center p-6'>
            <span className='text-2xl text-gray-600 font-semibold'>Total</span>
            <span className='text-green-400 font-semibold text-lg'>Rs = {total} /-</span>
          </div>
        </div>
         
        
        <button className="mt-4 w-[80%] py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-500 hover:text-gray-100 transition duration-300 shadow-md hover:shadow-lg">
          Place Order
        </button>

        </div> */}


        {/* Backdrop Overlay */}
        {showCard && (
          <div onClick={() => setShowCard(false)}
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40">       </div>
        )}

        {/* Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-[90vw] sm:w-[400px] bg-white shadow-2xl rounded-l-3xl z-50 flex flex-col justify-between transition-transform duration-500
        ${showCard ? "translate-x-0" : "translate-x-full"}`}>

          {/* Header */}
          <header className="px-6 py-4 flex justify-between items-center border-b">
            <span className="text-xl font-semibold text-green-600">Order Items</span>
            <RxCross2 className="w-6 h-6 text-green-500 hover:text-red-400 cursor-pointer transition"
             onClick={() => setShowCard(false)}/>
          </header>

          {/* Items Scrollable Area */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
            {items.length > 0 ? (
              items.map((item) => (
                <SidebarCard
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}/>
            ))
            ) : (
              <p className="text-center text-gray-400">Your cart is empty 🛒</p>)}
          </div>

          {/* Total Summary + Button */}
          <div className="border-t px-6 py-5 bg-gray-50 rounded-bl-3xl">
            <div className="space-y-2 text-gray-600 text-base font-medium">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-green-500 font-semibold">Rs {sumTotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="text-green-500 font-semibold">Rs {deliveryFee}</span>
              </div>

              <div className="flex justify-between">
                <span>Taxes</span>
                <span className="text-green-500 font-semibold">Rs {taxes.toFixed(2)}</span>
              </div>

              <hr className="my-2" />
              <div className="flex justify-between text-lg font-bold text-gray-800">
                <span>Total</span>
                <span className="text-green-600">Rs {total}</span>
              </div>
            </div>

            <button className="mt-4 w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-500 transition duration-300 shadow-md hover:shadow-lg">
              Place Order
            </button>
          </div>
        </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Homepage



