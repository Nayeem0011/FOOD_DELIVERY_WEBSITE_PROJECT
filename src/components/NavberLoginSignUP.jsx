import { Fragment } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSignOut } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserPlus, FaSignInAlt } from 'react-icons/fa'
import { auth } from '../utils/firebase'
import toast from 'react-hot-toast'

const NavberLoginSignUP = () => {
  const [user] = useAuthState(auth)
  const [signOut] = useSignOut(auth)
  const navigate = useNavigate()

  const userSignOut = async () => {
    try {
      await signOut()
      localStorage.removeItem("token")
      toast.success("Sign out successfully")
      navigate("/login")
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <Fragment>
      {/* Desktop Login/Signup or SignOut */}
      <div className="hidden md:flex items-center gap-2 pr-5">
        {user ? (
          <button
            onClick={userSignOut}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition text-sm font-semibold">
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition text-sm font-semibold">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition text-sm font-semibold">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>

       {/* Mobile Login/Signup or SignOut icons */}
      <div className="flex md:hidden items-center gap-2">
        {
          user ? (
            <button onClick={userSignOut} title="Sign Out">
              <FaSignInAlt className="w-6 h-6 text-green-500 cursor-pointer" />
            </button>
            ) : (
              <>
              <Link to="/login" title="Login">
              <FaSignInAlt className="w-6 h-6 text-green-500 cursor-pointer" />
              </Link>
              <Link to="/signup" title="Signup">
              <FaUserPlus className="w-6 h-6 text-green-500 cursor-pointer" />
              </Link>
              </>
            )
         }
      </div>
    </Fragment>
  )
}

export default NavberLoginSignUP
