import { Fragment, useContext, useEffect } from 'react'
import Navber from '../components/Navber'
import Categories from '../Categories'
import MainCard from '../components/MainCard'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import SidebarCard from '../components/SidebarCard'
import { useSelector } from 'react-redux'
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from 'react-router-dom'

const Homepage = () => {
  const { category, setCategory, input, showCard, setShowCard } = useContext(dataContext)

  // Optional Enhancement: Lock background scroll when cart sidebar is open
  useEffect(() => {
    document.body.style.overflow = showCard ? 'hidden' : 'auto'
    return () => (document.body.style.overflow = 'auto')
  }, [showCard])

  // Filter Function
  const filter = (selectedCategory) => {
    if (selectedCategory === 'All') {
      setCategory(food_items)
    } else {
      const newList = food_items.filter(item => item.food_category === selectedCategory)
      setCategory(newList)
    }
  }

  const items = useSelector(state => state.cart)
  const sumTotal = items.reduce((total, item) => total + item.qty * item.price, 0)
  const deliveryFee = 20
  const taxes = sumTotal * 0.5 / 100
  const total = Math.floor(sumTotal + deliveryFee + taxes)

  return (
    <Fragment>
      <div className="bg-slate-200 w-full min-h-screen">
        <Navber />

        <div className="min-h-screen bg-white">

          {/* Category Section */}
          {!input && (
            <div className="w-full flex flex-wrap justify-center gap-6 px-4 py-6">
              {Categories.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 shadow hover:shadow-md hover:bg-green-100 transition cursor-pointer"
                  onClick={() => filter(item.name)}>
                  {item.icon}
                  <span className="text-sm text-gray-700 font-bold">{item.name}</span>
                </div>
              ))}
            </div>
          )}

          {/* Food Cards Section */}
          <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
            {category.length > 0 ? (
              category.map((item, index) => (
                <MainCard
                  key={index}
                  name={item.food_name}
                  image={item.food_image}
                  price={item.price}
                  id={item.id}
                  type={item.food_type}/>
              ))
            ) : (
              <div className="w-full h-[70vh] flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center gap-4 max-w-md text-center">
                  <MdRestaurantMenu className="text-green-500 text-5xl" />
                  <h2 className="text-2xl font-bold text-gray-700">That's not on the menu yet!</h2>
                  <p className="text-gray-500">Try searching for something else or check out the categories below.</p>
                </div>
              </div>
            )}
          </div>

          {/* Overlay Backdrop */}
          {showCard && (
            <div
              onClick={() => setShowCard(false)}
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
            />
          )}

          {/* Sidebar */}
          <div className={`fixed top-0 right-0 h-full w-[90vw] sm:w-[400px] bg-white shadow-2xl rounded-l-3xl z-50 flex flex-col justify-between transition-transform duration-500
          ${showCard ? "translate-x-0" : "translate-x-full"}`}>

            {/* Sidebar Header */}
            <header className="px-6 py-4 flex justify-between items-center border-b">
              <span className="text-xl font-semibold text-green-600">Order Items</span>
              <RxCross2
                className="w-6 h-6 text-green-500 hover:text-red-400 cursor-pointer transition"
                onClick={() => setShowCard(false)}
              />
            </header>

            {/* Sidebar Cart Items */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
              {items.length > 0 ? (
                items.map((item, index) => (
                  <SidebarCard
                    key={index}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                    qty={item.qty}
                  />
                ))
              ) : (
                <p className="text-center text-gray-400">Your cart is empty 🛒</p>
              )}
            </div>

            {/* Sidebar Total Summary + Order Button */}
            <div className="border-t px-6 py-5 bg-gray-50 rounded-bl-3xl">
              <div className="space-y-2 text-gray-600 text-base font-medium">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-green-500 font-semibold">Tk {sumTotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="text-green-500 font-semibold">Tk {deliveryFee}</span>
                </div>

                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span className="text-green-500 font-semibold">Tk {taxes.toFixed(2)}</span>
                </div>

                <hr className="my-2" />
                <div className="flex justify-between text-lg font-bold text-gray-800">
                  <span>Total</span>
                  <span className="text-green-600">Tk {total}</span>
                </div>
              </div>

              {/* Order Button */}
              <Link
                to={"/ordersection"}
                onClick={() => setShowCard(false)}>
                <button className="mt-4 w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-500 transition duration-300 shadow-md hover:shadow-lg">
                  Place Order
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Homepage
