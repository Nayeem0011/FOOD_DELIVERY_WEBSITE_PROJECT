import React, { useState } from 'react'
import { food_items } from './data/food_items'
import ContaintCard from './components/ContaintCard'
import Categories from './data/Categories'

const FoodSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all") // default

  // Filter Logic
  const filteredItems = selectedCategory === "all"
    ? food_items
    : food_items.filter(item => item.food_category.toLowerCase() === selectedCategory.toLowerCase())

  return (
    <div>
      {/* Category Button List */}
      <div className="flex gap-4 px-4 py-6">
        {Categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.name.toLowerCase())}
            className={`px-4 py-2 rounded-lg font-semibold 
              ${selectedCategory === cat.name.toLowerCase() ? "bg-green-500 text-white" : "bg-gray-200"}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Filtered Food Card List */}
      <div className="flex flex-wrap gap-6 px-6">
        {filteredItems.map(item => (
          <ContaintCard
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type === "non_veg" ? "non_veg" : "veg"}
          />
        ))}
      </div>
    </div>
  )
}

export default FoodSection
