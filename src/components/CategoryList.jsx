import React from 'react'
import CategoryCard from './CategoryCard'
import Categories from '../Categories'

const CategoryList = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 px-4 py-6">
      {Categories.map((item) => (
        <CategoryCard key={item.id} AllIcon={item} />
      ))}
    </div>
  )
}

export default CategoryList
