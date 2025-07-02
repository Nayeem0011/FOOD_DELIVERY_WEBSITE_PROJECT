// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
// import SignUp from '../pages/SignUp'
// import { RxCross2 } from "react-icons/rx";
// import Login from '../pages/Login'
// import SignupForm from "../pages/SignupForm";
// import LoginForm from "../pages/LoginForm"

// export const routes = createBrowserRouter([
//     {
//         path:"/",
//         element:<MainLayout/>,
//         children:[
//             {
//                 path:"/signup",
//                 element:<SignUp/>
//             },
//             {
//                 path:"/",
//                 element:<RxCross2/>
//             },
//             {
//                 path:"/login",
//                 element:<Login/>
//             },
//             {
//                 path:"/signupform",
//                 element:<SignupForm/>
//             },
//             {
//                 path:"/loginform",
//                 element:<LoginForm/>
//             },
//         ]
//     }
// ])

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Homepage from "../pages/Homepage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      
    ],
  },
]);
