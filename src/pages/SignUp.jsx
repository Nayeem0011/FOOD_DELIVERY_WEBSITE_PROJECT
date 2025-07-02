import { Fragment } from 'react'
import { FaFacebookF, FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { RxCross2 } from "react-icons/rx"
import { Link } from 'react-router-dom'

const AuthModal = () => {
  return (
    <Fragment>
      <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
        <div className="bg-white w-[90%] sm:w-[400px] rounded-2xl p-6 shadow-lg relative">
          
          {/* Close Icon */}
          <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
            <Link to={"/"}><RxCross2 /></Link>
          </button>

          {/* Header */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome!</h2>
          <p className="text-gray-500 text-sm mb-5">Sign up or log in to continue</p>

          {/* Facebook */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 mb-3">
            <FaFacebookF /> Continue with Facebook
          </button>

          {/* Google */}
          <button className="w-full border text-gray-700 py-2 rounded-md flex items-center justify-center gap-2 mb-3">
            <FcGoogle size={20}/> Continue with Google
          </button>

          {/* Apple */}
          <button className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center gap-2 mb-5">
            <FaApple /> Continue with Apple
          </button>

          {/* Or */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

           {/* Log in */}
          <button className="w-full bg-pink-500 text-white py-2 rounded-md mb-3 hover:bg-pink-600">Log in</button>

           {/* Sign up */}
          <button className="w-full border border-gray-400 py-2 rounded-md hover:bg-gray-50">Sign up</button>

          {/* Footer Text */}
          <p className="text-[12px] text-center text-gray-400 mt-4">
            By signing up, you agree to our <span className="text-pink-500">Terms and Conditions</span> and <span className="text-pink-500">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default AuthModal







// import React from 'react';
// import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
// import { RxCross2 } from 'react-icons/rx';

// const SignupModal = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
//       <div className="bg-white w-[90%] max-w-md rounded-xl shadow-xl p-6 relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
//           onClick={onClose}
//         >
//           <RxCross2 size={22} />
//         </button>

//         {/* Title */}
//         <h2 className="text-2xl font-bold text-center text-green-600 mb-2">
//           Welcome!
//         </h2>
//         <p className="text-sm text-center text-gray-500 mb-6">
//           Sign up to continue
//         </p>

//         {/* Input Fields */}
//         <div className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
//           />
//           <button className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold transition">
//             Sign Up
//           </button>
//         </div>

//         {/* Or Line */}
//         <div className="my-5 flex items-center">
//           <div className="flex-grow h-px bg-gray-300" />
//           <span className="px-3 text-gray-400 text-sm">or</span>
//           <div className="flex-grow h-px bg-gray-300" />
//         </div>

//         {/* Social Signup */}
//         <div className="flex flex-col gap-3">
//           <button className="flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition">
//             <FaFacebook className="text-blue-600" /> Continue with Facebook
//           </button>
//           <button className="flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition">
//             <FaGoogle className="text-red-500" /> Continue with Google
//           </button>
//           <button className="flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition">
//             <FaApple className="text-black" /> Continue with Apple
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupModal;
