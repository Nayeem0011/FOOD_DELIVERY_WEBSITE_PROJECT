import React, { Fragment } from 'react'
import Navber from '../components/Navber'
import CategoryList from '../components/CategoryList'
// import ContaintCard from '../components/ContaintCard'
import ContaintList from '../components/ContaintList'

const Homepage = () => {
  return (
    <Fragment>

        <div className='bg-slate-200 w-full min-h-screen'>
          <Navber/>
          <div className="min-h-screen bg-white">
            <CategoryList />
            <ContaintList/>
         </div>
        </div>

    </Fragment>
  )
}

export default Homepage
