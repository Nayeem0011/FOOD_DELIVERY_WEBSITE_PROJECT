// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase'; // 🔁 Firebase config path

// const SignInForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert('Login successful!');
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
//         <form onSubmit={handleLogin} className="flex flex-col gap-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-400"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-400"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignInForm;

import React from 'react';
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white w-[90%] max-w-md rounded-xl shadow-xl p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <Link to={"/"}><RxCross2 size={22} /></Link>
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-green-600 mb-2">
          Welcome Back!
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Log in to continue
        </p>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold transition">
            Log In
          </button>
        </div>

        {/* Or line */}
        <div className="my-5 flex items-center">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Social Logins */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition">
            <FaFacebook className="text-blue-600" /> Continue with Facebook
          </button>
          <button className="flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition">
            <FaGoogle className="text-red-500" /> Continue with Google
          </button>
          <button className="flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition">
            <FaApple className="text-black" /> Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
