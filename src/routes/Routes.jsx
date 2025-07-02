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
