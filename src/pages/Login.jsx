// import { Fragment, useState } from 'react'
// import { FaFacebookF, FaApple } from 'react-icons/fa'
// import { FcGoogle } from 'react-icons/fc'
// import { RxCross2 } from "react-icons/rx"
// import { Link, useNavigate } from 'react-router-dom'
// import { auth } from '../utils/firebase'
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
// import toast from 'react-hot-toast'

// const Login = () => {
//   // const [loading, setLoading] = useState(false)
//   const [data, setData] = useState({})
//   const navigate = useNavigate()

//   const [
//   signInWithEmailAndPassword,
//   user,
//   loading,
//   error,
// ] = useSignInWithEmailAndPassword(auth);

//   const changeHandler = (event) =>{
//     const  {name, value } = event.target
//     setData({...data, [name]: value})
//   }

//   const submitHandler = async (event) =>{
//     event.preventDefault()
//     const response = await signInWithEmailAndPassword(data.email, data.password)
//     console.log(response)

//     if (response.user.accessToken) {
//       toast.success("Account created successfully!")
//       localStorage.setItem("token",response.user.accessToken)
//       navigate("/")
//     }else{
//       toast.error("Faile", error.message)
//     }
//   }


//   return (
//     <Fragment>
//       <form onSubmit={submitHandler}>
//       <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//         <div className="bg-white w-[90%] sm:w-[400px] rounded-2xl p-6 shadow-lg relative">
          
//           {/* Close Icon */}
//           <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">
//             <Link to={"/"}><RxCross2 /></Link>
//           </button>

//           {/* Header */}
//           <h2 className="text-2xl font-bold text-green-500 mb-2">Welcome!</h2>
//           <p className="text-gray-500 text-sm mb-5">Sign up or log in to continue</p>

//           <input
//             type="email"
//             name='email'
//             id='email'
//             placeholder="Email"
//             required
//             className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
//             onChange={changeHandler}/>

//             <input
//             type="password"
//             name='password'
//             id='password'
//             placeholder="Password"
//             required
//             className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
//             onChange={changeHandler}/>

//            {/* Log in */}
//           {/* <button className="mb-4 w-full text-white py-2 rounded-md font-semibold transition bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 hover:text-gray-100  duration-300 shadow-md hover:shadow-lg">Log in</button> */}

//           <button type="submit" disabled={loading}
//           className={`w-full text-white py-2 rounded-md font-semibold transition bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 hover:text-gray-100 duration-300 shadow-md hover:shadow-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
//             {loading ? (
//               <div className="flex justify-center">
//                 <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//               </div>
//               ) : ("Login")}
//           </button>
              
//            {/* Or */}
//           <div className="flex items-center gap-3 mb-3">
//             <div className="flex-grow h-px bg-gray-300"></div>
//             <span className="text-gray-400 text-sm">or</span>
//             <div className="flex-grow h-px bg-gray-300"></div>
//           </div>

//            {/* Facebook */}
//           <button className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 mb-3 hover:bg-blue-500">
//             <FaFacebookF /> Continue with Facebook
//           </button>

//            {/* Google */}
//           <button className="w-full border text-gray-700 py-2 rounded-md flex items-center justify-center gap-2 mb-3 hover:bg-slate-100">
//             <FcGoogle size={20}/> Continue with Google
//           </button>

//            {/* Apple */}
//           <button className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center gap-2 mb-5 hover:bg-gray-900">
//             <FaApple /> Continue with Apple
//           </button>

//            {/* Footer Text */}
//           <Link to={"/signup"}>
//           <p className="font-bold text-sm text-green-500 mt-6 hover:text-blue-600 cursor-pointer flex justify-center">
//             Don't have an account? Sing Up here!
//           </p>
//           </Link>
//         </div>
//       </div>
//       </form>
//     </Fragment>
//   )
// }

// export default Login





import { Fragment, useState, useEffect } from 'react'
import { FaFacebookF, FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { RxCross2 } from "react-icons/rx"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'
import {signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { OAuthProvider } from "firebase/auth";

const Login = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)

  const changeHandler = (event) => {
    const { name, value } = event.target
    setData({ ...data, [name]: value })
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    if (!data.email || !data.password) {
      toast.error("Email and password are required")
      return
    }

    await signInWithEmailAndPassword(data.email, data.password)
  }

  useEffect(() => {
    if (user) {
      localStorage.setItem("token", user.user.accessToken)
      toast.success("Login successful!")
      navigate("/")
    }
  }, [user, navigate])

  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])

  const googleSignIn = async () => {
    try {
      const response = await signInWithGoogle()

      if (response?.user?.accessToken) {
        toast.success("Login successful!")
        localStorage.setItem("token", response.user.accessToken)
        navigate("/")
        } else {
          toast.error("Google login failed.")
        }
       } catch (err) {
        toast.error(err.message || "Something went wrong with Google sign-in.")
      }
    }

    const facebookSignIn = async () => {
      try {
        const provider = new FacebookAuthProvider()
        const result = await signInWithPopup(auth, provider)

        if (result?.user?.accessToken) {
          toast.success("Login successful!")
          localStorage.setItem("token", result.user.accessToken)
          navigate("/")
          } else {
            toast.error("Facebook login failed.")
          }
        } catch (err) {
          toast.error(err.message || "Something went wrong with Facebook sign-in.")
        }
     }

    const appleSignIn = async () => {
      const provider = new OAuthProvider('apple.com');
      try {
        const result = await signInWithPopup(auth, provider);
        const credential = OAuthProvider.credentialFromResult(result);
        const token = credential.idToken;
        // user info
        const user = result.user;
        console.log(user)
       } catch (error) {
        console.error(error);
       }
      };


  return (
    <Fragment>
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] sm:w-[400px] rounded-2xl p-6 shadow-lg relative">
            <form onSubmit={submitHandler}>
            
            {/* Close Icon */}
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">
              <Link to={"/"}><RxCross2 /></Link>
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-green-500 mb-2">Welcome!</h2>
            <p className="text-gray-500 text-sm mb-5">Sign in to continue</p>

            <input
              type="email"
              name='email'
              placeholder="Email"
              required
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
              onChange={changeHandler} />

            <input
              type="password"
              name='password'
              placeholder="Password"
              required
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
              onChange={changeHandler} />
            
            <button type="submit" disabled={loading}
             className={`w-full text-white py-2 rounded-md font-semibold transition bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 hover:text-gray-100 duration-300 shadow-md hover:shadow-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
              {loading ? (
                <div className="flex justify-center">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                </div>
                ) : ("Login")}
            </button>

            </form>
            {/* Or */}
            <div className="flex items-center gap-3 my-3">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="text-gray-400 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Facebook */}
            <button 
            onClick={facebookSignIn}
            className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 mb-3 hover:bg-blue-500">
              <FaFacebookF /> Continue with Facebook
            </button>

            {/* Google */}
            <button className="w-full border text-gray-700 py-2 rounded-md flex items-center justify-center gap-2 mb-3 hover:bg-slate-100"
            onClick={googleSignIn}>
              <FcGoogle size={20} /> Continue with Google
            </button>

            {/* Apple */}
            <button 
            onClick={appleSignIn}
            className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center gap-2 mb-5 hover:bg-gray-900">
              <FaApple /> Continue with Apple
            </button>

            {/* Footer Text */}
            <Link to={"/signup"}>
              <p className="font-bold text-sm text-green-500 hover:text-blue-600 cursor-pointer flex justify-center">
                Don't have an account? Sign Up here!
              </p>
            </Link>
          </div>
        </div>
    </Fragment>
  )
}

export default Login