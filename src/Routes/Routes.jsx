import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";

import AllUsers from "../Layout/Dashboard/AllUsers/Allusers";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/DashBoard/ManageItem/ManageItem";
import MyCart from "../Pages/DashBoard/MyCart.jsx/MyCart";



 export   const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
     {
      path: '/',
      element: <Home></Home>
     },
     {
      path: "menu",
      element: <Menu></Menu>
     },
     {
      path: '/order/:category',
      element: <Order> </Order>
     },
     {
      path: '/login',
      element: <Login></Login>
     },
     {
      path: '/signup',
      element: <SignUp></SignUp>
     },
     {
      path: '/secret',
      element: <PrivateRoute><Secret></Secret></PrivateRoute>
     }

     

   

    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
    
      {path: 'myCart',
        element: <MyCart></MyCart>
      }
      ,
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {path: 'manageItem',
      element: <AdminRoute><ManageItem></ManageItem></AdminRoute>

      }
    ]
  }
]);




