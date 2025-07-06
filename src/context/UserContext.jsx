import { createContext, Fragment, useState } from 'react'
import { food_items } from '../food'

export const dataContext = createContext()

const UserContext = ({children}) => {
    let [input, setInput] = useState("")
    let [category, setCategory] = useState(food_items)
    let [showCard, setShowCard] = useState(false)

    let data = {
        input,
        setInput,
        category,
        setCategory,
        showCard,
        setShowCard
    }

  return (
    <Fragment>
      <dataContext.Provider value={data}>
        {children}
      </dataContext.Provider>
    </Fragment>
  )
}

export default UserContext
