import { Fragment } from 'react'
import Homepage from '../pages/Homepage'
import { Outlet } from 'react-router-dom'
import NavberLoginSignUP from '../components/NavberLoginSignUP'

const MainLayout = () => {
  return (
    <Fragment>
      <Homepage/>
      <Outlet/>
      <NavberLoginSignUP/>
    </Fragment>
  )
}

export default MainLayout
