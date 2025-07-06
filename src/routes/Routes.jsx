import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import OrderSection from "../components/common/OrderSection";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
  {
    path: "ordersection",
    element: <PrivateRoute><OrderSection/></PrivateRoute>
  },
]);
