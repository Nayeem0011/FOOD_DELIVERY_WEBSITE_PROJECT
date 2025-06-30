import React, { Fragment, useState } from 'react'
import Navber from '../components/Navber'
import Categories from '../Categories'
import MainCard from '../components/MainCard'
import { food_items } from '../food'

const Homepage = () => {
  let [category, setCategory] = useState(food_items)

  function filter(category){
    if(category==="All"){
      setCategory(food_items)
    }else{
      let newList = food_items.filter((item)=>(item.food_category===category))
      setCategory(newList)
    }
  }

  return (
    <Fragment>
      <div className='bg-slate-200 w-full min-h-screen'>
        <Navber/>

        <div className="min-h-screen bg-white">
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
        </div>

        <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
          {category.map((item)=>(
            <MainCard
             name={item.food_name}
             image={item.food_image}
             price={item.price}
             id={item.id}
             type={item.food_type}/>
           ))}
        </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Homepage



