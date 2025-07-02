import React, { Fragment } from 'react'

import { FaUserPlus, FaSignInAlt } from 'react-icons/fa'; // signup/login icons
import { Link } from 'react-router-dom';
const NavberLoginSignUP = () => {
  return (
    <Fragment>
      {/* Login / Signup */}
          <div className="hidden md:flex items-center gap-2 pr-5">
            <Link to={"/login"}>
            <button className="px-4 py-2 bg-white border border-green-500 text-green-600 rounded-md hover:bg-green-50 transition text-sm font-semibold">
              Log In
            </button>
            </Link>

            <Link to={"/signup"}>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition text-sm font-semibold">
              Sign Up
            </button>
            </Link>
          </div>

           {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-2">
            <Link to={"login"}>
            <FaSignInAlt className="w-6 h-6 text-green-500 cursor-pointer" title="Login" />
            </Link>
            
            <Link to={"signup"}>
            <FaUserPlus className="w-6 h-6 text-green-500 cursor-pointer" title="Signup" />
            </Link>
          </div>
    </Fragment>
  )
}

export default NavberLoginSignUP
