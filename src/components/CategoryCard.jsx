import React from 'react'

const CategoryCard = ({ AllIcon: {name, icon } }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 shadow hover:shadow-md hover:bg-green-100 transition cursor-pointer duration-400">
      <div>{icon}</div>
      <span className="text-sm text-gray-700 font-bold text-[16px]">{name}</span>
    </div>
  )
}

export default CategoryCard
