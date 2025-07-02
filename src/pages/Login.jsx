import { Fragment } from 'react'
import { FaFacebookF, FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { RxCross2 } from "react-icons/rx"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Fragment>
      <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
        <div className="bg-white w-[90%] sm:w-[400px] rounded-2xl p-6 shadow-lg relative">
          
          {/* Close Icon */}
          <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">
            <Link to={"/"}><RxCross2 /></Link>
          </button>

          {/* Header */}
          <h2 className="text-2xl font-bold text-green-500 mb-2">Welcome!</h2>
          <p className="text-gray-500 text-sm mb-5">Sign up or log in to continue</p>

          <input
            type="email"
            name='email'
            id='email'
            placeholder="Email"
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"/>

            <input
            type="password"
            name='password'
            id='password'
            placeholder="Password"
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"/>

           {/* Log in */}
          <button className="mb-4 w-full text-white py-2 rounded-md font-semibold transition bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 hover:text-gray-100  duration-300 shadow-md hover:shadow-lg">Log in</button>

           {/* Or */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

           {/* Facebook */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 mb-3 hover:bg-blue-500">
            <FaFacebookF /> Continue with Facebook
          </button>

           {/* Google */}
          <button className="w-full border text-gray-700 py-2 rounded-md flex items-center justify-center gap-2 mb-3 hover:bg-slate-100">
            <FcGoogle size={20}/> Continue with Google
          </button>

           {/* Apple */}
          <button className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center gap-2 mb-5 hover:bg-gray-900">
            <FaApple /> Continue with Apple
          </button>

           {/* Footer Text */}
          <Link to={"/signup"}>
          <p className="font-bold text-sm text-green-500 mt-6 hover:text-blue-600 cursor-pointer flex justify-center">
            Don't have an account? Sing Up here!
          </p>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Login