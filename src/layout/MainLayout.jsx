import { Fragment } from 'react'
import Homepage from '../pages/Homepage'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <Fragment>
      <Homepage/>
      <Outlet/>
    </Fragment>
  )
}

export default MainLayout
