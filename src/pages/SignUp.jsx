// import { Fragment, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { RxCross2 } from "react-icons/rx"
// import { auth } from '../utils/firebase'
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import toast from 'react-hot-toast';

// const SignUp = () => {
//   // const [loading, setLoading] = useState(false)
//   const [data, setData] = useState({})
//   const navigate = useNavigate()

//   const [
//     createUserWithEmailAndPassword,
//     user,
//     loading,
//     error,
//   ] = useCreateUserWithEmailAndPassword(auth);


//   const changeHandler = (event) =>{
//     const{name, value} = event.target
//     setData({...data, [name]:value})
//   }

  
//   const submitHandler = async (event) =>{
//     event.preventDefault()
//     console.log(data)

//     const response = await createUserWithEmailAndPassword(data.email, data.password)

    
//     if(response.user.accessToken){
//       toast.success("Account created successfully!")
//       localStorage.setItem("token",response.user.accessToken)
//       navigate("/")
//     }else {
//       toast.error("Failed to create account. Pleace try again.")
//     }
//   }

//   return (
//     <Fragment>
//       <form  onSubmit={submitHandler}>
//       <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//         <div className="bg-white w-[90%] sm:w-[400px] rounded-2xl p-6 shadow-lg relative">

//            {/* Close Icon */}
//           <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">
//             <Link to={"/"}><RxCross2 /></Link>
//           </button>        
          
//            {/* Header */}
//           <h2 className="text-2xl font-bold text-green-500 mb-2">Welcome!</h2>
//           <p className="text-gray-500 text-sm mb-5">Create an Account</p>

//           {/* Input Fields */}
//           <div className="flex flex-col gap-4">
//             <input
//             type="text"
//             name='name'
//             id='name'
//             placeholder="Full Name"
//             required
//             className="px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
//             onChange={changeHandler}/>
            
//             <input
//             type="email"
//             name='email'
//             id='email'
//             placeholder="Email"
//             required
//             className="px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
//             onChange={changeHandler}/>

//             <input
//             type="password"
//             name='password'
//             id='password'
//             placeholder="Password"
//             required
//             className="px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
//             onChange={changeHandler}/>

//             <input 
//             type="text"
//             name='phoneNo' 
//             id='phoneNo'
//             placeholder="Phone Number" 
//             required
//             className="px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
//             onChange={changeHandler}/>

//             <button className="w-full text-white py-2 rounded-md font-semibold transition bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 hover:text-gray-100  duration-300 shadow-md hover:shadow-lg">
//               Sign Up
//             </button>
//             {/* <button type="submit" disabled={loading}
//             className={`w-full text-white py-2 rounded-md font-semibold transition bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 hover:text-gray-100 duration-300 shadow-md hover:shadow-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
//               {loading ? (
//                 <span className="loading loading-dots loading-md"></span>
//                 ) : (
//                   "Sign Up"
//               )}
//            </button> */}

//           </div>

//           <div className="flex flex-col gap-3">
//             <Link to={"/login"}>
//             <p className="font-bold text-sm text-green-500 mt-5 hover:text-blue-600 cursor-pointer flex justify-center">
//               Already have an account? Login here!
//             </p>
//             </Link>
//           </div>

//            {/* Footer Text */}
//           <p className="text-[12px] text-center text-gray-400 mt-4">
//             By signing up, you agree to our <span className="text-pink-500">Terms and Conditions</span> and <span className="text-pink-500">Privacy Policy</span>.
//           </p>
//         </div>
//       </div>
//       </form>
//     </Fragment>
//   )
// }

// export default SignUp





import { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx"
import { auth } from '../utils/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'

const SignUp = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth)

  // Input Change Handler
  const changeHandler = (event) => {
    const { name, value } = event.target
    setData({ ...data, [name]: value })
  }

  // Form Submit Handler
  const submitHandler = async (event) => {
    event.preventDefault()

    if (!data.email || !data.password) {
      toast.error("Email and password are required")
      return
    }

    await createUserWithEmailAndPassword(data.email, data.password)
  }

  // Show toast after signup success
  // useEffect(() => {
  //   if (user) {
  //     toast.success("Account created successfully!")
  //     navigate("/")
  //   }
  // }, [user, navigate])


  useEffect(() => {
    if (user) {
      const accessToken = user.user?.accessToken

      if (accessToken) {
      localStorage.setItem("token", accessToken)
    }

      toast.success("Account created successfully!")
      navigate("/")
    }
  }, [user, navigate])


//   useEffect(() => {
//   if (user) {
//     const accessToken = user.user?.accessToken

//     if (accessToken) {
//       localStorage.setItem("accessToken", accessToken)
//     }

//     toast.success("Account created successfully!")
//     navigate("/")
//   }
// }, [user, navigate])


  // Show error toast if error occurs
  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] sm:w-[400px] rounded-2xl p-6 shadow-lg relative">

            {/* Close Icon */}
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">
              <Link to={"/"}><RxCross2 /></Link>
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-green-500 mb-2">Welcome!</h2>
            <p className="text-gray-500 text-sm mb-5">Create an Account</p>

            {/* Input Fields */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name='name'
                placeholder="Full Name"
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
                onChange={changeHandler} />

              <input
                type="email"
                name='email'
                placeholder="Email"
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
                onChange={changeHandler} />

              <input
                type="password"
                name='password'
                placeholder="Password"
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
                onChange={changeHandler} />

              <input
                type="text"
                name='phoneNo'
                placeholder="Phone Number"
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-green-400"
                onChange={changeHandler} />

              {/* <button
                type="submit"
                disabled={loading}
                className={`w-full text-white py-2 rounded-md font-semibold transition bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 hover:text-gray-100 duration-300 shadow-md hover:shadow-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {loading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Sign Up"
                )}
              </button> */}

              <button type="submit" disabled={loading}
              className={`w-full text-white py-2 rounded-md font-semibold transition bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 hover:text-gray-100 duration-300 shadow-md hover:shadow-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {loading ? (
                  <div className="flex justify-center">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  ) : ("Sign Up")}
              </button>

            </div>

            <div className="flex flex-col gap-3">
              <Link to={"/login"}>
                <p className="font-bold text-sm text-green-500 mt-5 hover:text-blue-600 cursor-pointer flex justify-center">
                  Already have an account? Login here!
                </p>
              </Link>
            </div>

            {/* Footer Text */}
            <p className="text-[12px] text-center text-gray-400 mt-4">
              By signing up, you agree to our <span className="text-pink-500">Terms and Conditions</span> and <span className="text-pink-500">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default SignUp
